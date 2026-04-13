module.exports = {
  locales: ['en', 'de', 'fr', 'lb'],
  defaultNamespace: 'app',
  input: ['src/**/*.{js,ts,vue}'],
  output: 'locales/$NAMESPACE.$LOCALE.json',
  createOldCatalogs: false,
  sort: true,
  namespaceSeparator: false,
  keySeparator: false,
  vue: {
    parse: true, // Active le parsing des fichiers Vue
  },
}
