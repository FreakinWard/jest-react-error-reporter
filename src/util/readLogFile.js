import fs from 'fs';

const defaultFileName = 'jest_output.log';

export default function readLogFile(options) {
  const fileName = options.file || defaultFileName;

  try {
    console.log(`fileName: ${fileName}`, { options });

    fs.accessSync(fileName, fs.constants.R_OK);
  } catch (err) {
    throw new Error(`File '${fileName}' does not exist`);
  }

  return fs.readFileSync(fileName, 'utf-8');
}
