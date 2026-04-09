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
