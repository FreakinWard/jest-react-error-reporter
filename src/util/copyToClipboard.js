import clipboardy from 'clipboardy';

export default function copyToClipboard(text) {
  console.log('📋Markdown has been copied to clipboard.');

  return clipboardy.writeSync(text);
}
