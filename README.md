# Overview

## Getting Started

Install node packages: `npm install`

Run test and capture the output:

```bash
npm run test:cover 2>&1 | tee coverage/jest_output

# output
# jest_output
```

Run the program:

```bash
node index.js -f ../../dev/MyProject/coverage/jest_output
```

Expect the output to be copied to the clipboard, for example:

```markdown
- (14) UserInformation.test
  - (9x) console.error - Warning: An update to ForwardRef(FormControl) inside a test was not wrapped in act(...).
    - Components:
      - components/FormTextField.tsx:124:3
      - components/UserForm.tsx:17:3
  - (3x) console.error - at Object.onError (node_modules/@tanstack/query-core/src/query.ts:446:23)
 ```

## Roadmap

- Build this into a [custom jest report](https://brunoscheufler.com/blog/2020-02-14-supercharging-jest-with-custom-reporters).
  - [jest-reporter-template](https://github.com/ryparker/jest-reporter-template)
  - https://colinwren.is/blog/writing-a-jest-test-reporter
- Add tests
