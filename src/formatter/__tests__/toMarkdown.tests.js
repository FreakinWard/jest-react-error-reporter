import toMarkdown from '../toMarkdown.js';

describe('toMarkdowns', () => {
  it('should render', () => {
    // arrange
    const testSuitesMock = [
      { name: 'ChatbotWrapper.test', issues: [] },
      { name: 'Form.test', issues: [] },
      { name: 'CloneForm.test', issues: [] },
      { name: 'ConfigEntry.test', issues: [] },
      { name: 'DepositDetails.test', issues: [] },
      {
        name: 'DataMapperComponent.test',
        issues: [
          {
            components: [
              {
                column: '3',
                file: 'components/LogiX/LogiX.tsx',
                line: '174',
              },
              {
                column: '3',
                file: 'components/DataMapperComponent/DataMapperComponent.tsx',
                line: '17',
              },
            ],
            issue:
              'Warning: An update to CreateDialogAction inside a test was not wrapped in act(...).',
            type: 'console.error',
          },
          {
            components: [
              {
                column: '3',
                file: 'components/LogiX/LogiX.tsx',
                line: '174',
              },
              {
                column: '3',
                file: 'components/DataMapperComponent/DataMapperComponent.tsx',
                line: '17',
              },
            ],
            issue:
              'Warning: An update to AddSuspenseReason inside a test was not wrapped in act(...).',
            type: 'console.error',
          },
          {
            components: [
              {
                column: '3',
                file: 'components/LogiX/LogiX.tsx',
                line: '174',
              },
              {
                column: '3',
                file: 'components/DataMapperComponent/DataMapperComponent.tsx',
                line: '17',
              },
            ],
            issue:
              'Warning: An update to CreateDialogAction inside a test was not wrapped in act(...).',
            type: 'console.error',
          },
        ],
      },
      {
        name: 'CreateForm.test',
        issues: [],
      },
    ];

    const expected = `
- (3)  DataMapperComponent.test
  - (2x) console.error - Warning: An update to CreateDialogAction inside a test was not wrapped in act(...).
    - Components
    - components/LogiX/LogiX.tsx:174:3
    - components/DataMapperComponent/DataMapperComponent.tsx:17:3
  - console.error - Warning: An update to AddSuspenseReason inside a test was not wrapped in act(...).
    - Components
    - components/LogiX/LogiX.tsx:174:3
    - components/DataMapperComponent/DataMapperComponent.tsx:17:3
`;

    // act
    const result = toMarkdown(testSuitesMock);

    // assert
    expect(result).toEqual(expected);
  });
});
