## Geoportail Luxembourg WebApp

## Quickstart

To start local dev environment with HMR support:

```
$ npm run start
```

## 🔧 Scripts

- `start` runs your app for development, reloading on file changes, will run `npm run dev`
- `dev` runs your app for development, reloading on file changes
- `build` builds your app and outputs it in your `dist` directory
- `build-only` builds your app and outputs it in your `dist` directory, but without type checking
- `build:lib:prod` builds custom elements as lib
- `build:lib:dev` builds custom elements as lib with base URL for local dev environnement (`--base=/dev/main`)
- `test`, `test:unit`, `test:unit:ci` runs your test suite with Vitest. See _Unit testing_ section
- `test:e2e`, `test:e2e:ci`, `test:e2e:dev` see _End to end testing_ section
- `coverage-report` create code coverage report for e2e tests
- `type-check`, `type-check:dev`, runs type checking on project (`/src/bundle` is excluded). Use `type-check:dev` to keep type-checking alive.
- `lint`, `lint:js`, `lint:prettier` runs the linter for your project (`/src/bundle` and fixtures are excluded)
- `format` format the code with prettier (write mode)
- `prepare` runs `husky install` command

A `.prettierignore` file is used by prettier and lint to exclude some files (such as the built bundle, the lib files, or the fixtures, ...).

## 💉 Test

### Unit testing

- `npm run test` launch all Vitests UTs, is an alias for `npm run test:unit`
- `npm run test:unit` will launch all Vitests UTs, will watch for any changes in both src files and tests files
- `npm run test:unit:ci` to be used by CI only | Coverage reports are located in: `/coverage/index.html`

### End to end testing with Cypress

For e2e tests, the code is instrumented with the Istanbul library to obtain resulting code coverage. The dev test server is launched with the env var `INSRUMENT_COVERAGE=true`

- `test:e2e` will launch e2e tests and opens Cypress UI. You need to build the app before using this command with `npm run build-only -- --mode=e2e`. This will test the app built for production (with css minification, images src optimization using base64, ...)
- `test:e2e:ci` This will run tests in command line only on a dev build (no need to build the app). Used by ci workflow.
- `test:e2e:dev` will launch e2e tests and opens Cypress UI. This command will launch a vite server in dev mode, there is no need to build the app.
- `report` after running any of the above e2e test suites, the command `npm run report` will display the code coverage report from the data created by e2e tests in `/.nyc_output/out.json`. This recipe is used in the CI workflow.

⚠️ `test:e2e:ci` command should launch tests on the generated build production. For now, it launches the vite dev server, otherwise the code coverage report is not generated and the next ci command `npx nyc report` will trigger an error.

## 📦 Build as a lib for integration (in geoportal v3)

In order to use the new Lux components made with Vuejs as an external dep, follow steps below.

### Build the lib

In the project **luxembourg-geoportail**, build the app as library with this command:

```
$ npm run build:lib:prod
```

When using the lib in local developpement mode within the geoportailv3 docker composition, use (this sets the necessary base URL option `--base=/dev/main`):

```
$ npm run build:lib:dev
```

This will generate an export of all available **Vue components** and **State persistor services** that can be used in a independant application (eg. geoportalv3 legacy app).

To see what are the components exported, check the `/src/bundle/lib.ts` that is the entry point for the build of the library.

⚠️ This build includes its own **Vue.js** dependencies and will export Vue's utilities such as watchers that can be used to interact with the lib state. For this reason, avoid including another Vue.js dep in the targeted project.

### Import the lib in another app

You can include the built lib multiple ways in the `package.json`:

- using `npm link`
- using `git`

```js
// Example of a package.json
// including the lib with git and a specific branch (GSLUX-602-IntegrationV3)
"packages": {
    "": {
      "name": "luxgeo_test_inte",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "luxembourg-geoportail": "git://github.com/Geoportail-Luxembourg/luxembourg-geoportail.git#GSLUX-602-IntegrationV3"
        // or "https://github.com/Geoportail-Luxembourg/luxembourg-geoportail.git#GSLUX-602-IntegrationV3"
      },
      "devDependencies": {
        // ...
      }
    }
}
```

### Develop on lib within geoportailv3 environnement

A simple way to develop on the lib and test it directly from within the geoportailv3 context is to map your `luxembourg-geoportal` repository as a volume to webpack_dev_server service of the docker composition:

```
  webpack_dev_server:
    volumes:
      # map vue custom elements for dev:
      - /[your-path]/luxembourg-geoportail:/usr/lib/node_modules/luxembourg-geoportail
```

To see changes applied you then need to run `npm run build:lib:dev` and refresh your browser on `http://localhost:8080/dev/main.html`.

### Make assets available

Assets like translations are imported using an absolute path. Make them accessible via the right path. For example, copy the assets directory with the `CopyPlugin`:

```js
// webpack.config.js
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  // ...
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            'node_modules',
            'luxembourg-geoportail',
            'bundle',
            'assets'
          ),
          to: 'assets',
        },
      ],
    }),
  ],
}
```

⚠️ For geoportalv3 we choose to copy the assets in the Dockerfile.

```bash
# copy web component styles and translations from bundle to static-ngeo
RUN mkdir /etc/static-ngeo/web-components \
    && cp -r /usr/lib/node_modules/luxembourg-geoportail/bundle/assets/ /etc/static-ngeo/web-components/assets/ \
    && cp /usr/lib/node_modules/luxembourg-geoportail/bundle/style.css /etc/static-ngeo/web-components/style.css
```
