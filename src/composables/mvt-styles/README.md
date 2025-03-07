## Styling Vector Tiles

## Introduction

In the Luxembourg geoportal, map background styles can be customized by the user through the three components of the `style-selector`:

- one component for simple mode,
- one for medium mode,
- and a final one for expert mode

The styles modified by the user are saved or reloaded via `/getvtstyle`, `/uploadvtstyle`, `/deletevtstyle` and `vectortilesurl` requests.

⚠️ Users styles are stored using file system on the luxembourg geoportal server https://map.geoportail.lu into a shared directory `VT_DIR`. The tile server https://vectortiles.geoportail.lu is able to retrieve styling info from this shared directory.

This processing is done on the backend side, see legacy v3 code for more info:
🔗 [Geoportail-Luxembourg/geoportailv3](https://github.com/Geoportail-Luxembourg/geoportailv3/blob/18ab23ff9cf1ac7fce4fc6a19cae71f1b94e0715/geoportal/geoportailv3_geoportal/views/upload.py#L18)

⚠️ The https://vectortiles.geoportail.lu is mandatory to make the print and the 3D map work because both functionalities need raster images.

⚠️ For dev purposes, we will be using https://map4gim.geoportail.lu and https://vectortiles-staging.geoportail.lu plateform instead.

## 💡 How it works

### Default styles `style.json`

First, default styles are loaded for each vector background layers (currently, there are 3 background layers available), eg:

- https://vectortiles.geoportail.lu/styles/roadmap/style.json
- https://vectortiles.geoportail.lu/styles/topomap/style.json
- https://vectortiles.geoportail.lu/styles/topomap_gray/style.json

### User' styles

- `/uploadvtstyle`: each time the user changes the vector tile style, the frontend sends the new style to the server. The new style is saved and a **new id is created and associated to this new style**.
- `/getvtstyle`: given a style id, get the style content from the server.
- `/deletevtstyle`: remove the associated style content from the server.

## 🔧 Configure styles urls

`/getvtstyle`, `/uploadvtstyle`, `/deletevtstyle` requests can be configured through `.env` (or `.env-staging`) variables: `VITE_MVTSTYLES_PATH_GET`, `VITE_MVTSTYLES_PATH_UPLOAD`, `VITE_MVTSTYLES_PATH_DELETE`. See below for details about .env configuration.

It is also possible to override theses values by settings new urls using `useMvtStyles().setRegisterUrl_v3()`. This function is meant to be used by the legacy v3 version of Luxembourg geoportal.

```js
// MainController.js
// Override urls on legacy v3 side:
const mvtStyles = useMvtStyles()
mvtStyles.setRegisterUrl_v3({
  get: 'https://map4gim.geoportail.lu/getvtstyle',
  upload: 'https://map4gim.geoportail.lu/uploadvtstyle',
  delete: 'https://map4gim.geoportail.lu/deletevtstyle',
  vectortiles: 'https://vectortiles-staging.geoportail.lu',
})
```

### Save styles on local dev server

Style files will be saved on local dev server (v3 in docker environment).

```sh
# Urls for vectortiles
VITE_VECTORTILES_URL="https://vectortiles-staging.geoportail.lu"

# Paths for MVT styles
VITE_MVTSTYLES_PATH_GET="https://localhost:8080/getvtstyle"
VITE_MVTSTYLES_PATH_UPLOAD="https://localhost:8080//uploadvtstyle"
VITE_MVTSTYLES_PATH_DELETE="https://localhost:8080/deletevtstyle"
```

same as using relative urls:

```sh
# Urls for vectortiles
VITE_VECTORTILES_URL="https://vectortiles-staging.geoportail.lu" # ⚠️ NO VECTORTILES SERVER ON LOCAL DEV

# Paths for MVT styles
VITE_MVTSTYLES_PATH_GET="/getvtstyle"
VITE_MVTSTYLES_PATH_UPLOAD="/uploadvtstyle"
VITE_MVTSTYLES_PATH_DELETE="/deletevtstyle"
```

NB. Using relative urls is possible because proxy urls are defined in `vite.config.ts`.

⚠️ There is no vectortiles server providing default `style.json` nor raster images on local dev, this is why you should always use `VITE_VECTORTILES_URL="https://vectortiles-staging.geoportail.lu"`. Raster images are used for 3D and printing.

### Save styles on staging server

```sh
# Urls for vectortiles
VITE_VECTORTILES_URL="https://vectortiles-staging.geoportail.lu"

# Paths for MVT styles
VITE_MVTSTYLES_PATH_GET="https://map4gim.geoportail.lu/getvtstyle"
VITE_MVTSTYLES_PATH_UPLOAD="https://map4gim.geoportail.lu/uploadvtstyle"
VITE_MVTSTYLES_PATH_DELETE="https://map4gim.geoportail.lu/deletevtstyle"
```

### Save styles on production server

```sh
# Urls for vectortiles
VITE_VECTORTILES_URL="https://vectortiles.geoportail.lu"

# Paths for MVT styles
VITE_MVTSTYLES_PATH_GET="https://map.geoportail.lu/getvtstyle"
VITE_MVTSTYLES_PATH_UPLOAD="https://map.geoportail.lu/uploadvtstyle"
VITE_MVTSTYLES_PATH_DELETE="https://map.geoportail.lu/deletevtstyle"
```

### Relative urls

You can also use relative urls if your environment allows it.

```sh
VITE_MVTSTYLES_PATH_GET="/getvtstyle"
VITE_MVTSTYLES_PATH_UPLOAD="/uploadvtstyle"
VITE_MVTSTYLES_PATH_DELETE="/deletevtstyle"
```
