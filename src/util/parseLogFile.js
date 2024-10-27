function extractTestSuite(line) {
  const testFilePattern = /(\S+\/)?(\S+\.test\.(tsx|ts))/;

  // Match the line against the test file pattern
  const match = line.match(testFilePattern);

  if (match) {
    const fullFileName = match[2]; // Get the full file name from the match
    const testName = fullFileName.replace(/\.test\.(tsx|ts)/, '.test');

    return { name: testName, issues: [] };
  }

  // Return null if no test suite is found in the command
  return null;
}

const extractIssueStacktrace = (lines, line) => {
  const stackTrace = [];

  let i = lines.indexOf(line) + 1;

  const lineIncludesStackTrace = (line) => {
    return !(
      line.startsWith('PASS') ||
      line.startsWith('FAIL') ||
      line.includes('console.error') ||
      line.includes('console.warn')
    );
  };

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
  const issueStackTrace = extractIssueStacktrace(lines, line);

  const components = [];

  issueStackTrace.forEach((trace) => {
    // Matches lines that contain component information and are within the RevXUI/src/ directory
    // The regex matches if the line starts with /Users/aaronward/dev/rsi/RevXUI/src/ and is followed by any number of characters, then ".tsx:", then one or more digits, then ":", then one or more digits
    const matches = trace.match(
      /\/Users\/aaronward\/dev\/rsi\/RevXUI\/src\/(.*\.tsx):(\d+):(\d+)/,
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

  const components = extractIssuesRelatedComponents(lines, line);

  return { type, issue, components };
}

// Function to parse the log file and extract console output
export default function parseLogFile(logContent) {
  const lines = logContent.split('\n');
  let advanceToIndex = 0;

  return lines.reduce(
    (acc, line, index, lines) => {
      if (index < advanceToIndex) return acc;

      const lineHasNewTestSuite =
        line.includes('.test.ts') ||
        line.startsWith('PASS') ||
        line.startsWith('FAIL');

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

        advanceToIndex =
          lines.indexOf(line) + extractIssueStacktrace(lines, line).length;

        return {
          ...acc,
          index: advanceToIndex,
        };
      }

      return acc;
    },
    { currentSuite: null, testSuites: [] },
  ).testSuites;
}
