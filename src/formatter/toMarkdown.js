const newLine = '\n';

const testSuitesToMarkdown = (testSuites) => {
  const tabs = (numberOfTabs) => Array(numberOfTabs).fill('  ').join('');

  const componentsToMarkdown = (components) => {
    const componentLines = components.map((component) => {
      return `${tabs(3)}- ${component.file}:${component.line}:${component.column}`;
    });

    return [`${tabs(2)}- Components`, ...componentLines].join(newLine);
  };

  const issueToMarkdown = (issue) => {
    const issueLine = `${tabs(1)}- (${issue.count}x) ${issue.type} - ${issue.issue}`;

    const componentLines =
      issue.components?.length > 0
        ? componentsToMarkdown(issue.components)
        : [];

    return [issueLine, componentLines].join(newLine);
  };

  const testSuiteToMarkdown = (suite) => {
    const suiteHeader = `- (${suite.issues.length})  ${suite.name}`;

    const getUniqueIssues = () => {
      return suite.issues.reduce((unique, issue) => {
        const existingIssue = unique.find(
          (uniqueIssue) =>
            uniqueIssue.issue === issue.issue &&
            JSON.stringify(uniqueIssue.components) ===
              JSON.stringify(issue.components),
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

    const testSuiteIssuesSorted = testSuiteIssues.sort(
      (a, b) => b.count - a.count,
    );

    const issueLines = testSuiteIssuesSorted.map((issue) =>
      issueToMarkdown(issue),
    );

    const issueList = issueLines.join(newLine);

    return `${suiteHeader}${newLine}${issueList}`;
  };

  return testSuites.map((suite) => testSuiteToMarkdown(suite));
};

export default function toMarkdown(testSuites) {
  const testSuitesWithIssues = testSuites.filter(
    (suite) => suite.issues.length > 0,
  );

  const testSuitesByIssuesDesc = testSuitesWithIssues.sort(
    (suiteA, suiteB) => suiteB.issues.length - suiteA.issues.length,
  );

  const testSuitesFormatted = testSuitesToMarkdown(testSuitesByIssuesDesc);

  const formattedTestSuites = testSuitesFormatted.join(newLine);

  return `${newLine}${formattedTestSuites}${newLine}`;
}
