module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
    {
      // The templates package must stay self-contained: it is published and
      // consumed by the 3D viewer, which has none of the app's internals.
      // Everything it needs arrives through props or the injected context
      // (see packages/feature-info-templates/src/context.ts).
      files: ['packages/feature-info-templates/**/*.{js,ts,vue}'],
      rules: {
        // The package owns its HTML sanitizing (src/sanitize-html.ts): use
        // `v-lux-html`, never a raw `v-html`. Not enabled by vue3-essential,
        // so it has to be named explicitly.
        'vue/no-v-html': 'error',
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['@/*', '**/src/components/*', '**/src/stores/*'],
                message:
                  'The feature-info-templates package may not import from the app. Add what you need to LuxTplContext instead.',
              },
            ],
            paths: [
              {
                name: 'pinia',
                message:
                  'The templates package is store-agnostic; take the value through LuxTplContext.',
              },
              {
                name: 'i18next-vue',
                message:
                  'Use the lib-owned useLuxTranslation() composable (src/i18n.ts).',
              },
            ],
          },
        ],
      },
    },
  ],
  plugins: ['no-only-tests'],
  rules: {
    'no-prototype-builtins': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/no-unresolved': 'off',
    'no-console': 'error',
    'no-only-tests/no-only-tests': 'error',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: false,
    },
  },
}
