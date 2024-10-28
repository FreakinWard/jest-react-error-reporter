import parseLogFile from '../parseLogFile.js';

describe('parseLogFile', () => {
  const logContentMock = `
  
> next-gen@0.1.0 test:cover
> npm run test --  --coverage --silent=false --watchAll=false


> next-gen@0.1.0 test
> node --expose-gc --no-compilation-cache ./node_modules/react-scripts/scripts/test.js --logHeapUsage --silent --coverage --silent=false --watchAll=false

PASS src/components/ChatbotWrapper/ChatbotWrapper.test.tsx (11.006 s, 200 MB heap size)
PASS src/components/Form/__tests__/Form.test.tsx (11.554 s, 201 MB heap size)
PASS src/pages/admin/ManageForms/CloneForm/__test__/CloneForm.test.tsx (17.931 s, 288 MB heap size)
PASS src/components/AttributeFilterDialog/__tests__/AttributeFilterDialog.tests.tsx (19.911 s, 242 MB heap size)
PASS src/pages/admin/ConfigTypeEditor/components/ConfigEntry/tests/ConfigEntry.test.tsx (20.968 s, 316 MB heap size)
PASS src/pages/DepositDetails/DepositDetails.test.tsx (21.07 s, 269 MB heap size)
PASS src/components/DataMapperComponent/DataMapperComponent.test.tsx (21.614 s, 291 MB heap size)
  ● Console

    console.error
      Warning: An update to CreateDialogAction inside a test was not wrapped in act(...).

      When testing, code that causes React state updates should be wrapped into act(...):

      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */

      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at CreateDialogAction (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/CreateDialogAction.tsx:104:14)
          at ActionsHeader (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/ActionsHeader.tsx:38:5)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at ContextSection (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/ContextSection.tsx:24:39)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at ContextGroup (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/ContextGroup.tsx:51:17)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Grid (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/material/node/Grid/Grid.js:380:49)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Grid (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/material/node/Grid/Grid.js:380:49)
          at MyGroupProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/MyGroupProvider.tsx:161:11)
          at MyGroup (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/src/components/MyGroup/MyGroup.tsx:157:7)
          at MyGroupViewer (/Users/TedLasso/dev/MyReactApp/src/components/MyGroupViewer/MyGroupViewer.tsx:174:3)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at DataMapper (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/GroupMapper.tsx:46:19)
          at DataMapperComponent (/Users/TedLasso/dev/MyReactApp/src/components/DataMapperComponent/DataMapperComponent.tsx:17:3)
          at RenderedRoute (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/hooks.tsx:633:26)
          at Routes (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/components.tsx:410:3)
          at Router (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/components.tsx:328:13)
          at MemoryRouter (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/components.tsx:152:3)
          at ThemeProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/private-theming/node/ThemeProvider/ThemeProvider.js:39:5)
          at ThemeProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/ThemeProvider/ThemeProvider.js:50:5)
          at ThemeProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/material/node/styles/ThemeProvider.js:21:14)
          at I18nextProvider (/Users/TedLasso/dev/MyReactApp/node_modules/react-i18next/dist/commonjs/I18nextProvider.js:13:19)
          at QueryClientProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.js:65:3)
          at Provider (/Users/TedLasso/dev/MyReactApp/node_modules/react-redux/lib/components/Provider.js:19:3)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom.development.js:27589:9)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:25508:5)
      at disabled (node_modules/react-dom/cjs/react-dom.development.js:17527:7)
      at Object.unsubscribe [as next] (node_modules/react-hook-form/src/useForm.ts:107:21)
      at Object.ref [as next] (node_modules/react-hook-form/src/utils/createSubject.ts:45:5)
      at Object.T [as _updateValid] (node_modules/react-hook-form/src/logic/createFormControl.ts:262:5)

    console.error
      Warning: An update to AddSuspenseReason inside a test was not wrapped in act(...).

      When testing, code that causes React state updates should be wrapped into act(...):

      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */

      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at AddSuspenseReason (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/AddSuspenseReason.tsx:24:14)
          at ActionsHeader (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/ActionsHeader.tsx:38:5)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at ContextSection (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/ContextSection.tsx:24:39)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at ContextGroup (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/ContextGroup.tsx:51:17)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Grid (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/material/node/Grid/Grid.js:380:49)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Grid (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/material/node/Grid/Grid.js:380:49)
          at MyGroupProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/MyGroupProvider.tsx:161:11)
          at MyGroup (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/src/components/MyGroup/MyGroup.tsx:157:7)
          at MyGroupViewer (/Users/TedLasso/dev/MyReactApp/src/components/MyGroupViewer/MyGroupViewer.tsx:174:3)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at DataMapper (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/GroupMapper.tsx:46:19)
          at DataMapperComponent (/Users/TedLasso/dev/MyReactApp/src/components/DataMapperComponent/DataMapperComponent.tsx:17:3)
          at RenderedRoute (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/hooks.tsx:633:26)
          at Routes (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/components.tsx:410:3)
          at Router (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/components.tsx:328:13)
          at MemoryRouter (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/components.tsx:152:3)
          at ThemeProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/private-theming/node/ThemeProvider/ThemeProvider.js:39:5)
          at ThemeProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/ThemeProvider/ThemeProvider.js:50:5)
          at ThemeProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/material/node/styles/ThemeProvider.js:21:14)
          at I18nextProvider (/Users/TedLasso/dev/MyReactApp/node_modules/react-i18next/dist/commonjs/I18nextProvider.js:13:19)
          at QueryClientProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.js:65:3)
          at Provider (/Users/TedLasso/dev/MyReactApp/node_modules/react-redux/lib/components/Provider.js:19:3)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom.development.js:27589:9)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:25508:5)
      at disabled (node_modules/react-dom/cjs/react-dom.development.js:17527:7)
      at Object.unsubscribe [as next] (node_modules/react-hook-form/src/useForm.ts:107:21)
      at Object.ref [as next] (node_modules/react-hook-form/src/utils/createSubject.ts:45:5)
      at Object.T [as _updateValid] (node_modules/react-hook-form/src/logic/createFormControl.ts:262:5)

    console.error
      Warning: An update to CreateDialogAction inside a test was not wrapped in act(...).

      When testing, code that causes React state updates should be wrapped into act(...):

      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */

      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at CreateDialogAction (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/CreateDialogAction.tsx:104:14)
          at ActionsHeader (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/ActionsHeader.tsx:38:5)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at ContextRepeatingGroup (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/src/componentsContextRepeatingGroup.tsx:18:18)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at ContextSection (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/ContextSection.tsx:24:39)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at ContextGroup (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/ContextGroup.tsx:51:17)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Grid (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/material/node/Grid/Grid.js:380:49)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Grid (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/material/node/Grid/Grid.js:380:49)
          at MyGroupProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/MyGroupProvider.tsx:161:11)
          at MyGroup (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/src/components/MyGroup/MyGroup.tsx:157:7)
          at MyGroupViewer (/Users/TedLasso/dev/MyReactApp/src/components/MyGroupViewer/MyGroupViewer.tsx:174:3)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at div
          at div
          at /Users/TedLasso/dev/MyReactApp/node_modules/@emotion/react/dist/emotion-element-f93e57b0.cjs.dev.js:62:23
          at Box (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/createBox.js:31:41)
          at DataMapper (/Users/TedLasso/dev/MyReactApp/node_modules/@my-package/package-name/components/GroupMapper.tsx:46:19)
          at DataMapperComponent (/Users/TedLasso/dev/MyReactApp/src/components/DataMapperComponent/DataMapperComponent.tsx:17:3)
          at RenderedRoute (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/hooks.tsx:633:26)
          at Routes (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/components.tsx:410:3)
          at Router (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/components.tsx:328:13)
          at MemoryRouter (/Users/TedLasso/dev/MyReactApp/node_modules/react-router/lib/components.tsx:152:3)
          at ThemeProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/private-theming/node/ThemeProvider/ThemeProvider.js:39:5)
          at ThemeProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/system/ThemeProvider/ThemeProvider.js:50:5)
          at ThemeProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@mui/material/node/styles/ThemeProvider.js:21:14)
          at I18nextProvider (/Users/TedLasso/dev/MyReactApp/node_modules/react-i18next/dist/commonjs/I18nextProvider.js:13:19)
          at QueryClientProvider (/Users/TedLasso/dev/MyReactApp/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.js:65:3)
          at Provider (/Users/TedLasso/dev/MyReactApp/node_modules/react-redux/lib/components/Provider.js:19:3)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom.development.js:27589:9)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:25508:5)
      at disabled (node_modules/react-dom/cjs/react-dom.development.js:17527:7)
      at Object.unsubscribe [as next] (node_modules/react-hook-form/src/useForm.ts:107:21)
      at Object.ref [as next] (node_modules/react-hook-form/src/utils/createSubject.ts:45:5)
      at Object.T [as _updateValid] (node_modules/react-hook-form/src/logic/createFormControl.ts:262:5)
      
  
PASS src/pages/admin/CreateForms/__tests__/CreateForm.test.tsx (25.852 s, 308 MB heap size)
PASS src/components/MyComponent.test.tsx (15.608 s, 375 MB heap size)
  
  `;

  it('should render', () => {
    // arrange
    // act
    const result = parseLogFile(logContentMock);

    // assert
    expect(result).toBeDefined();
  });

  it('should return expected', () => {
    // arrange
    const expected = [
      {
        name: 'ChatbotWrapper.test',
        issues: [],
      },
      {
        name: 'Form.test',
        issues: [],
      },
      {
        name: 'CloneForm.test',
        issues: [],
      },
      {
        name: 'ConfigEntry.test',
        issues: [],
      },
      {
        name: 'DepositDetails.test',
        issues: [],
      },
      {
        name: 'DataMapperComponent.test',
        issues: [
          {
            issue:
              'Warning: An update to CreateDialogAction inside a test was not wrapped in act(...).',
            type: 'console.error',
            components: [
              {
                column: '14',
                file: 'node_modules/@my-package/package-name/components/CreateDialogAction.tsx:104:14',
                line: '104',
              },
              {
                column: '5',
                file: 'node_modules/@my-package/package-name/components/ActionsHeader.tsx:38:5',
                line: '38',
              },
              {
                column: '39',
                file: 'node_modules/@my-package/package-name/components/ContextSection.tsx:24:39',
                line: '24',
              },
              {
                column: '17',
                file: 'node_modules/@my-package/package-name/components/ContextGroup.tsx:51:17',
                line: '51',
              },
              {
                column: '11',
                file: 'node_modules/@my-package/package-name/components/MyGroupProvider.tsx:161:11',
                line: '161',
              },
              {
                column: '7',
                file: 'node_modules/@my-package/package-name/src/components/MyGroup/MyGroup.tsx:157:7',
                line: '157',
              },
              {
                column: '3',
                file: 'src/components/MyGroupViewer/MyGroupViewer.tsx:174:3',
                line: '174',
              },
              {
                column: '19',
                file: 'node_modules/@my-package/package-name/components/GroupMapper.tsx:46:19',
                line: '46',
              },
              {
                column: '3',
                file: 'src/components/DataMapperComponent/DataMapperComponent.tsx:17:3',
                line: '17',
              },
              {
                column: '21',
                file: 'src/useForm.ts:107:21',
                line: '107',
              },
              {
                column: '5',
                file: 'src/utils/createSubject.ts:45:5',
                line: '45',
              },
              {
                column: '5',
                file: 'src/logic/createFormControl.ts:262:5',
                line: '262',
              },
            ],
          },
          {
            issue:
              'Warning: An update to AddSuspenseReason inside a test was not wrapped in act(...).',
            type: 'console.error',
            components: [
              {
                column: '14',
                file: 'node_modules/@my-package/package-name/components/CreateDialogAction.tsx:104:14',
                line: '104',
              },
              {
                column: '5',
                file: 'node_modules/@my-package/package-name/components/ActionsHeader.tsx:38:5',
                line: '38',
              },
              {
                column: '39',
                file: 'node_modules/@my-package/package-name/components/ContextSection.tsx:24:39',
                line: '24',
              },
              {
                column: '17',
                file: 'node_modules/@my-package/package-name/components/ContextGroup.tsx:51:17',
                line: '51',
              },
              {
                column: '11',
                file: 'node_modules/@my-package/package-name/components/MyGroupProvider.tsx:161:11',
                line: '161',
              },
              {
                column: '7',
                file: 'node_modules/@my-package/package-name/src/components/MyGroup/MyGroup.tsx:157:7',
                line: '157',
              },
              {
                column: '3',
                file: 'src/components/MyGroupViewer/MyGroupViewer.tsx:174:3',
                line: '174',
              },
              {
                column: '19',
                file: 'node_modules/@my-package/package-name/components/GroupMapper.tsx:46:19',
                line: '46',
              },
              {
                column: '3',
                file: 'src/components/DataMapperComponent/DataMapperComponent.tsx:17:3',
                line: '17',
              },
              {
                column: '21',
                file: 'src/useForm.ts:107:21',
                line: '107',
              },
              {
                column: '5',
                file: 'src/utils/createSubject.ts:45:5',
                line: '45',
              },
              {
                column: '5',
                file: 'src/logic/createFormControl.ts:262:5',
                line: '262',
              },
            ],
          },
          {
            issue:
              'Warning: An update to CreateDialogAction inside a test was not wrapped in act(...).',
            type: 'console.error',
            components: [
              {
                column: '14',
                file: 'node_modules/@my-package/package-name/components/CreateDialogAction.tsx:104:14',
                line: '104',
              },
              {
                column: '5',
                file: 'node_modules/@my-package/package-name/components/ActionsHeader.tsx:38:5',
                line: '38',
              },
              {
                column: '39',
                file: 'node_modules/@my-package/package-name/components/ContextSection.tsx:24:39',
                line: '24',
              },
              {
                column: '17',
                file: 'node_modules/@my-package/package-name/components/ContextGroup.tsx:51:17',
                line: '51',
              },
              {
                column: '11',
                file: 'node_modules/@my-package/package-name/components/MyGroupProvider.tsx:161:11',
                line: '161',
              },
              {
                column: '7',
                file: 'node_modules/@my-package/package-name/src/components/MyGroup/MyGroup.tsx:157:7',
                line: '157',
              },
              {
                column: '3',
                file: 'src/components/MyGroupViewer/MyGroupViewer.tsx:174:3',
                line: '174',
              },
              {
                column: '19',
                file: 'node_modules/@my-package/package-name/components/GroupMapper.tsx:46:19',
                line: '46',
              },
              {
                column: '3',
                file: 'src/components/DataMapperComponent/DataMapperComponent.tsx:17:3',
                line: '17',
              },
              {
                column: '21',
                file: 'src/useForm.ts:107:21',
                line: '107',
              },
              {
                column: '5',
                file: 'src/utils/createSubject.ts:45:5',
                line: '45',
              },
              {
                column: '5',
                file: 'src/logic/createFormControl.ts:262:5',
                line: '262',
              },
            ],
          },
        ],
      },
      {
        name: 'CreateForm.test',
        issues: [],
      },
    ];

    // act
    const result = parseLogFile(logContentMock);

    // assert
    expect(result).toEqual(expected);
  });
});
