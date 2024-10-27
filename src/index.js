import { program } from 'commander';
import readLogFile from './util/readLogFile.js';
import jestErrorReporter from './jestErrorReporter.js';

// Main function to execute the steps
const app = () => {
  program
    .name('jest-error-reporter')
    .description(
      'CLI to summarize Jest test output in search of errors and effected components',
    )
    .version('0.8.0')
    .option('-f, --file <filename>', 'filename or path to the jest output file')
    .action((options) => {
      const logContent = readLogFile(options);

      jestErrorReporter(logContent);
    });

  program.parse();
};

app();
