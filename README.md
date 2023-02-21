## Geoportail Luxembourg WebApp

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

To start local dev environment with HMR support:

- `npm run start`

## Scripts

- `start` runs your app for development, reloading on file changes, will run `npm run dev`
- `dev` runs your app for development, reloading on file changes
- `build` builds your app and outputs it in your `dist` directory
- `build-only` builds your app and outputs it in your `dist` directory, but without type checking
- `test`, `test:unit`, `test:unit:ci` runs your test suite with Vitest. See _Unit testing_ section
- `test:e2e`, `test:e2e:ci`, `test:e2e:dev` see _End to end testing_ section
- `lint`, `lint:js`, `lint:prettier` runs the linter for your project
- `format` format the code with prettier (write mode)
- `prepare` runs `husky install` command

## Test

### Unit testing

- `npm run test` launch all Vitests UTs, is an alias for `npm run test:unit`
- `npm run test:unit` will launch all Vitests UTs, will watch for any changes in both src files and tests files
- `npm run test:unit:ci` to be used by CI only | Coverage reports are located in: `/coverage/index.html`

### End to end testing with Cypress
- `test:e2e` will launch e2e tests and opens Cypress UI. You need to build the app before using this command with `npm run build-only -- --mode=e2e`. This will test the app built for production (with css minification, images src optimization using base64, ...)
- `test:e2e:ci` This will run tests in command line only on a dev build (no need to build the app). Used by ci workflow.
- `test:e2e:dev` will launch e2e tests and opens Cypress UI. This command will launch a vite server in dev mode, there is no need to build the app.

⚠️ `test:e2e:ci` command should launch tests on the generated build production. For now, it launches the vite dev server, otherwise the code coverage report is not generated and the next ci command `npx nyc report` will trigger an error.
