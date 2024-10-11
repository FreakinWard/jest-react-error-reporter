# Overview

## Getting Started

Install node packages: `npm install`

Run test and capture the output:
```bash 
npm run test:cover 2>&1 | tee jest_output.log  

# output
# jest_output.log
````

Run the program: `node index.js`

Expect the output to be copied to the clipboard, for example:

- (14)  UserInformation.test
    - (9x) console.error - Warning: An update to ForwardRef(FormControl) inside a test was not wrapped in act(...).
        - Components:
          - components/FormTextField.tsx:124:3
          - components/UserForm.tsx:17:3
    - (3x) console.error - at Object.onError (node_modules/@tanstack/query-core/src/query.ts:446:23)
