# Translation management scripts

This folder contains helper scripts for i18n migration and synchronization.

## `sync-v3-to-app.cjs`

Goal:

- Download latest v3 dictionaries from `https://map.geoportail.lu/static/NO_CACHE/{lang}.json`
- Scan `src/` to detect translation keys used in code
- For each language, copy matching values into `public/assets/locales/app.{lang}.json`
  with this priority:
  1.  downloaded v3 dictionary
  2.  `public/assets/locales/client.{lang}.json` fallback
  3.  keep current value in `app.{lang}.json`

### Usage

```bash
node tools/translations/sync-v3-to-app.cjs
```

### Useful options

```bash
node tools/translations/sync-v3-to-app.cjs --dry-run
node tools/translations/sync-v3-to-app.cjs --skip-download
node tools/translations/sync-v3-to-app.cjs --langs=fr,de,en,lb
node tools/translations/sync-v3-to-app.cjs --prune-client
```

### Notes

- Downloaded source files are stored in `tools/translations/downloads/*.json`.
- The script updates keys when a matching key exists in v3 or in `client.{lang}.json`.
- Keys missing from both sources are reported in the terminal output.
- With `--prune-client`, migrated used keys are removed from `client.{lang}.json`.

## `transform-tx-v3-po-to-v4-json.cjs`

Goal:

- Read legacy v3 Transifex pulls stored as `.po` files
- Convert them to sorted JSON dictionaries for the v4 locale files
- Keep `app.{lang}.json` managed separately as JSON through Transifex

Default mapping:

- `tools/translations/transifex/v3-po/client.{lang}.po` -> `public/assets/locales/client.{lang}.json`
- `tools/translations/transifex/v3-po/server.{lang}.po` -> `public/assets/locales/server.{lang}.json`
- `tools/translations/transifex/v3-po/legends.{lang}.po` -> `public/assets/locales/legends.{lang}.json`
- `tools/translations/transifex/v3-po/tooltips.{lang}.po` -> `public/assets/locales/tooltips.{lang}.json`

### Usage

```bash
node tools/translations/transform-tx-v3-po-to-v4-json.cjs
```

### Useful options

```bash
node tools/translations/transform-tx-v3-po-to-v4-json.cjs --dry-run
node tools/translations/transform-tx-v3-po-to-v4-json.cjs --langs=fr,de,en,lb
node tools/translations/transform-tx-v3-po-to-v4-json.cjs --namespaces=client,tooltips,legends,server
node tools/translations/transform-tx-v3-po-to-v4-json.cjs --input-dir=tools/translations/transifex/v3-po
```

### Typical workflow

```bash
tx pull -a
node tools/translations/transform-tx-v3-po-to-v4-json.cjs
```

Notes:

- `app.{lang}.json` is pulled directly as JSON via Transifex.
- Legacy v3 namespaces are pulled as `.po` files first, then transformed locally.
- Empty `msgstr` values fall back to `msgid` during conversion.
