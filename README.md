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
- `build:lib:prod` builds custom elements as lib and transpiles it to legacy JS to allow minification (uglify) in v3
- `build:lib:dev` builds custom elements as lib with base URL for local dev environnement (`--base=/dev/main`)
- `test`, `test:unit`, `test:unit:ci` runs your test suite with Vitest. See _Unit testing_ section
- `test:e2e`, `test:e2e:ci`, `test:e2e:dev` see _End to end testing_ section
- `coverage-report` create code coverage report for e2e tests
- `type-check`, `type-check:dev`, runs type checking on project (`/src/bundle` is excluded). Use `type-check:dev` to keep type-checking alive.
- `lint`, `lint:js`, `lint:prettier` runs the linter for your project (`/src/bundle` and fixtures are excluded)
- `format` format the code with prettier (write mode)
- `prepare` runs `husky install` command

A `.prettierignore` file is used by prettier and lint to exclude some files (such as the built bundle, the lib files, or the fixtures, ...).

## ⚙️ .env files and modes

- `.env` used for production mode, for now, production mode is available only for building the lib (to be included in v3, on production or on migration platform)
- `.env.development` used for development mode, v4 pure standalone app
- `.env.e2e` use for e2e mode, v4 pure standalone app but for e2e testing
- `.env.staging` used for development, staging mode, used while the lib is build in dev mode (include v4 in v3 as a lib and test locally on `http://localhost:8080/dev/main.html`)

⚠️ It's important to note that `NODE_ENV` (`process.env.NODE_ENV`) and modes are two different concepts. See: https://vitejs.dev/guide/env-and-mode

## 💉 Test

### Unit testing

- `npm run test` launch all Vitests UTs, is an alias for `npm run test:unit`
- `npm run test:unit` will launch all Vitests UTs, will watch for any changes in both src files and tests files
- `npm run test:unit:ci` to be used by CI only | Coverage reports are located in: `/coverage/index.html`

### End to end testing with Cypress

For e2e tests, the code is instrumented with the Istanbul library to obtain resulting code coverage. The dev test server is launched with the env var `INSTRUMENT_COVERAGE=true`

- `test:e2e` will launch e2e tests and opens Cypress UI. You need to build the app before using this command with `npm run build-only -- --mode=e2e`. This will test the app built for production (with css minification, images src optimization using base64, ...)
- `test:e2e:ci` This will run tests in command line only on a dev build (no need to build the app). Used by ci workflow.
- `test:e2e:dev` will launch e2e tests and opens Cypress UI. This command will launch a vite server in dev mode, there is no need to build the app.
- `report` after running any of the above e2e test suites, the command `npm run report` will display the code coverage report from the data created by e2e tests in `/.nyc_output/out.json`. This recipe is used in the CI workflow.

⚠️ `test:e2e:ci` command should launch tests on the generated build production. For now, it launches the vite dev server, otherwise the code coverage report is not generated and the next ci command `npx nyc report` will trigger an error.

## 🖋️ Translations i18n

In Lux v4 standalone, local files `app.fr.json` and `client.fr.json` are used.

- `app.fr.json` contains both specific i18n from v4 that does not exists in v3 (eg. title, aria label, etc) and the content of the original v3 app.fr.json
- `client.fr.json` contains the same key/values as in v3 (it is a copy), update this file whenever there is an update in v3.

When Lux is used in lib mode 📦, it is possible to oerride i18next configuration to customize file paths to get translations from v3 directly (instead of delivering both v4 and v3 i18n files).

## 📦 Build as a lib for integration (in geoportal v3)

In order to use the new Lux components made with Vuejs as an external dep, the library must be built and imported in the V3 project.

### Manual Build

In the project **luxembourg-geoportail**, build the app as library with this command:

```
$ npm run build:lib:prod
```

Note: Building in prod mode also transpiles the lib to legacy JS to allow minification (via UglifyJsPlugin) in v3

When using the lib in local developpement mode within the geoportailv3 docker composition, use (this sets the necessary base URL option `--base=/dev/main`):

```
$ npm run build:lib:dev
```

This will generate an export of all available **Vue components** and **State persistor services** that can be used in a independant application (eg. geoportalv3 legacy app).

To see what are the components exported, check the `/src/bundle/lib.ts` that is the entry point for the build of the library.

⚠️ This build includes its own **Vue.js** dependencies and will export Vue's utilities such as watchers that can be used to interact with the lib state. For this reason, avoid including another Vue.js dep in the targeted project.

The build configuration can be found in `vite-dist.config`. It excludes `OpenLayers` and `mapbox-gl` from the lib to prevent problems (eg. in minification) when running the lib within v3. The lib uses the `ol` and `mapbox-gl` instances of v3, which versions should be similar to those in v4.

The results of the build can be found in the folder `bundle`

### Automatic build via CI

An automatic mecanism has been created with github actions. This workflow is triggered when a tag is pushed into the repo.

For dev releases, create a new tag, the CI will then generate the release. The following naming conventions are recommended:
<branch_name>\_DEV\_<short_commit>

an npm script is included in package.json, so just call

```
npm run tag
git push --tags
```

The CI automatically builds the lib, creates a release named after the tag and includes the built bundle in the release. The built package can then be downloaded at the URL:

```
"https://github.com/Geoportail-Luxembourg/luxembourg-geoportail/releases/download/<release_name>/luxembourg-geoportail-lib-0.0.0-dev.tgz"
```

This package URL can also be used to reference the dependency for NPM in package.json, see below

### Automatic tag in CI

On merge of a PR on main branch the CI will create an automatic tag of type
<branch_name>\_CI\_<short_commit>

### Cleanup of tags:

Everyone should clean their own dev-only tags.

The following scripts might come handy to avoid messing up the repo with unused tags.

#### cleaning out local tags before pushing any

Before a git push --tags, one should sync the local tags with the remote ones:

```
for t in $(git tag -l); do git tag -d $t; done
git fetch -t
```

#### cleaning usused tags

There is not any CI automation yet for cleaning tags. However, the naming convention (dev tags shall start with the branch name) makes cleaning them much easier.

```
for t in $(git tag -l | grep GSLUX-635_automate_tag_on_merge_); do git push origin :refs/tags/$t; done
for t in $(git tag -l | grep GSLUX-635_automate_tag_on_merge_); do git tag -d $t; done
```

where `GSLUX-635_automate_tag_on_merge` is the branch name

#### cleaning releases

Releases must be deleted manually in the github web interface. The github API might be used, but this would be some extra complexity for the moment.

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
        "luxembourg-geoportail": "ttps://github.com/Geoportail-Luxembourg/luxembourg-geoportail/releases/download/GSLUX-635_create_release_CI_6606389/luxembourg-geoportail-lib-0.0.0-dev.tgz"
      },
      "devDependencies": {
        // ...
      }
    }
}
```

### Develop on lib within geoportailv3 environment

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

### Initialize app settings

#### 1. Proxy and remote urls

Configure your proxy urls, otherwise, layers may not display correctly.

```js
// Inside your App.vue, or in your custom js if using lux as a lib:
const proxyWmsUrl = 'https://map.geoportail.lu/ogcproxywms'
const remoteProxyWms = 'https://map.geoportail.lu/httpsproxy'

proxyUrlHelper.init(proxyWmsUrl, remoteProxyWms)
```

#### 2. Vector tiles url

Configure url for vector tiles (see `.env`, `.env-staging` files).

```bash
# Urls for vectortiles to be used in prod
VITE_VECTORTILES_URL="https://vectortiles.geoportail.lu"

# OR Urls for vectortiles to be used in staging/dev mode
VITE_VECTORTILES_URL="https://vectortiles-staging.geoportail.lu"
```

💡 For more info about styling, see `src/composables/mvt-styles/README.md`

### Use components, services, stores, composables

To use components, services, stores or composables in you application, all these should explicitely exported in the lib.

To create custom components in the application using the lib, adapt the following code snippet to relevant components in the target app:

```js
const LayerPanelElement = createElementInstance(LayerPanel, app)
customElements.define('layer-panel', LayerPanelElement)
```

## 🔒 Authenticate user

To authenticate inside the v4 standalone app, you will need the v3 composition to be running at the same time and make some adjustement on both sides:

- in v4, update `VITE_LOGIN_URL`, `VITE_LOGOUT_URL` and `VITE_USERINFO_URL` to point to your local v3 composition

```bash
# file: luxembourg-geoportail/.env.development
VITE_LOGIN_URL="http://localhost:8080/login"
VITE_LOGOUT_URL="http://localhost:8080/logout"
VITE_USERINFO_URL="http://localhost:8080/getuserinfo"
```

- in v4, activate cross origin for GET/POST requests with a custom `VITE_CREDENTIALS_ORIGIN`.

```bash
# file: luxembourg-geoportail/.env.development
VITE_CREDENTIALS_ORIGIN="include"
# ⚠️ WARNING: don't use `"include"` value in production (but use `"same-origin"` instead).
```

- in v3, add a new env variable in `docker-compose.yaml`: `ALLOW_CORS`

```yaml
# file: geoportailv3/docker-compose.yaml
geoportal:
  extends: ...
  volumes_from: ...
  volumes: ...
  environment: ...
    - VECTORTILESURL
    - ALLOW_CORS # <=== Add new var here!
  ports:
    - 8080:8080
```

- and set it to value = `1` in the `.env.project` file to allow cors and cross origin requests.

```bash
# file: geoportailv3/.env.project
ALLOW_CORS=1 # ⚠️WARNING: don't use this value in production
```

## 🛡️ By pass CORS in dev mode

Because v4 is a standalone app with no backend, it uses sometimes local v3's backend and sometimes migration platform https://migration.geoportail.lu to perform api calls (see dedicated `.env` files to check urls).

To ignore CORS errors when performing these calls, it is mandatory to use a plugin in your web browser (such as Use Allow CORS plugin for Chrome: https://mybrowseraddon.com/access-control-allow-origin.html). Without the plugin functionnalities such as MyMaps, authentication, MySymbols, ... won't work.

💡 NB. For e2e testing, CORS securities have been deactivated with the Cypress option: `chromeWebSecurity: false` (only avaialable for Chrome browser).
