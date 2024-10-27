import toMarkdown from './formatter/toMarkdown.js';
import copyToClipboard from './util/copyToClipboard.js';
import parseLogFile from './util/parseLogFile.js';

export default function jestErrorReporter(logContent) {
  const testSuites = parseLogFile(logContent);

  const markdown = toMarkdown(testSuites);

  copyToClipboard(markdown);
}
