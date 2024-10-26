import fs from 'fs';
import clipboardy from 'clipboardy';
import {program} from 'commander';

// Function to read the jest_output.log file
function readLogFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function extractTestSuite(line) {
  const testFilePattern = /(\S+\/)?(\S+\.test\.(tsx|ts))/;

  // Match the line against the test file pattern
  const match = line.match(testFilePattern);

  if (match) {
    const fullFileName = match[2];  // Get the full file name from the match
    const testName = fullFileName.replace(/\.test\.(tsx|ts)/, '.test');

    return { name: testName, issues: [] };
  }

  // Return null if no test suite is found in the command
  return null;
}

const extractIssueStacktrace = (lines,  line) => {
  const stackTrace = [];

  let i = lines.indexOf(line) + 1;

  const lineIncludesStackTrace = (line)=> {
    return !(line.startsWith('PASS') || line.startsWith('FAIL') || line.includes('console.error'))
  }

  while (i < lines.length && lineIncludesStackTrace(lines[i])) {
    stackTrace.push(lines[i]);
    i++;
  }
  while (i < lines.length && !lines[i].includes('console.error')) {
    stackTrace.push(lines[i]);
    i++;
  }

  return stackTrace;
};

const extractIssuesRelatedComponents = (lines, line) => {
  const issueStackTrace = extractIssueStacktrace(lines,  line);

  const components = [];

  issueStackTrace.forEach((trace) => {
    // Matches lines that contain component information and are within the RevXUI/src/ directory
    // The regex matches if the line starts with /Users/aaronward/dev/rsi/RevXUI/src/ and is followed by any number of characters, then ".tsx:", then one or more digits, then ":", then one or more digits
    const matches = trace.match(
        /\/Users\/aaronward\/dev\/rsi\/RevXUI\/src\/(.*\.tsx):(\d+):(\d+)/
    );
    if (matches) {
      components.push({
        file: matches[1],
        line: matches[2],
        column: matches[3],
      });
    }
  });

  return components;
};

function extractIssue(lines, line, index) {
  const type = line.includes('console.error')
      ? 'console.error'
      : 'console.warning';

  const issue = lines[index + 1].trim();

  const components = extractIssuesRelatedComponents(lines,  line);

  return { type, issue, components };
}

// Function to parse the log file and extract console output
function parseLogFile(logContent) {
  const lines = logContent.split('\n');
  let advanceToIndex = 0;

  return lines.reduce(
      (acc, line, index, lines) => {
        if (index < advanceToIndex) return acc;

        const lineHasNewTestSuite =
            line.includes('.test.ts') ||
            line.startsWith('PASS') || line.startsWith('FAIL');

        if (lineHasNewTestSuite) {
          if (acc.currentSuite) acc.testSuites.push(acc.currentSuite);

          acc.currentSuite = extractTestSuite(line);

          return acc;
        }

        const lineStartsNewIssue =
            line.includes('console.error') || line.includes('console.warn');

        if (lineStartsNewIssue) {
          const issue = extractIssue(lines, line, index);

          acc.currentSuite.issues.push(issue);

          advanceToIndex = lines.indexOf(line) + extractIssueStacktrace(lines, line).length

          return {
            ...acc,
            index: advanceToIndex,
          };
        }

        return acc;
      },
      { currentSuite: null, testSuites: [] }
  ).testSuites;
}

// Function to format the parsed data as markdown
function formatAsMarkdown(testSuites) {
  const formatTestSuite = (suite) => {
    const testSuiteIssuesCount = suite.issues.length;
    const testSuiteIssueIndicator = `(${testSuiteIssuesCount}) `;

    const suiteHeader = `- ${testSuiteIssueIndicator} ${suite.name}`;

    const getUniqueIssues = () => {
      return suite.issues.reduce((unique, issue) => {
        const existingIssue = unique.find(
            (uniqueIssue) =>
                uniqueIssue.issue === issue.issue &&
                JSON.stringify(uniqueIssue.components) ===
                JSON.stringify(issue.components)
        );

        if (!existingIssue) {
          unique.push({ ...issue, count: 1 });
        } else {
          existingIssue.count += 1;
        }

        return unique;
      }, []);
    };

    const testSuiteIssues = getUniqueIssues();

    const testSuiteIssuesSorted = testSuiteIssues.sort((a, b) => b.count - a.count);

    const issueLines = testSuiteIssuesSorted.map((issue) => formatIssue(issue));

    const issueList = issueLines.join('\n');

    return `${suiteHeader}\n${issueList}`;
  };

  const formatIssue = (issue) => {
    const hasMultipleIssues = issue.count > 1;
    const issueCount = hasMultipleIssues ? `(${issue.count}x) ` : '';
    const issueLine = `  - ${issueCount}${issue.type} - ${issue.issue}`;

    const componentLines =
        issue.components?.length > 0 ? formatComponents(issue.components) : [];

    return [issueLine, componentLines].join('\n');
  };

  const formatComponents = (components) => {
    const componentLines = components.map((component) => {
      return `      - ${component.file}:${component.line}:${component.column}`;
    });

    return ['    - Components:', ...componentLines].join('\n');
  };

  const testSuitesWithIssues = testSuites.filter((suite) => suite.issues.length > 0);

  const testSuitesSorted = testSuitesWithIssues.sort((suiteA, suiteB) => suiteB.issues.length - suiteA.issues.length);
  const testSuitesFormatted = testSuitesSorted.map((suite) => formatTestSuite(suite))

  return testSuitesFormatted.join('\n');
}

// Main function to execute the steps
const defaultFileName = 'jest_output.log';

function logParser(filename = defaultFileName) {
  try {
    fs.accessSync(filename, fs.constants.R_OK);
  } catch (err) {
    throw new Error(`File '${filename}' does not exist`);
  }

  const logContent = readLogFile(filename);

  const testSuites = parseLogFile(logContent);

  const markdown = formatAsMarkdown(testSuites);

  clipboardy.writeSync(markdown);

  console.log('Markdown has been copied to clipboard.');
}

const app = ()=> {
  program
    .name('jest-error-reporter')
    .description('CLI to summarize Jest test output in search of errors and effected components')
    .version('0.8.0')
    .option('-f, --file <filename>', 'filename or path to the jest output file')
    .action((options) => {
      console.log(`filename: ${options.file}`, {options});

     logParser(options.file)
    });

  program.parse();
  }

app();
