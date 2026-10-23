import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { createRequire } from 'node:module'
import dts from 'vite-plugin-dts'

const require = createRequire(import.meta.url)

// Note: there is deliberately no `@` → app-src alias here. The package must not
// reach outside its own directory; a residual `@/...` import fails the build.
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.json',
      // Flatten `src/` out of the emitted tree so the declarations land at
      // dist/index.d.ts, where package.json `types`/`exports` point.
      entryRoot: 'src',
      include: ['src/**/*.ts', 'src/**/*.vue'],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss/nesting'),
        require('tailwindcss')('./tailwind.config.cjs'),
      ],
    },
  },
  build: {
    outDir: 'dist',
    cssCodeSplit: false,
    lib: {
      // lib-entry adds the Tailwind sheet on top of the public API.
      entry: resolve(__dirname, 'src/lib-entry.ts'),
      name: 'LuxTemplateLibrary',
      fileName: 'lux-tpl',
      formats: ['es'],
    },
    rollupOptions: {
      // Vite's lib mode silently externalises unresolved imports, which is how
      // an app import could sneak back in. Make it fatal.
      onwarn(warning, defaultHandler) {
        if (warning.code === 'UNRESOLVED_IMPORT') {
          throw new Error(
            `${warning.message}\n` +
              'The feature-info-templates package must not import from outside its own tree.'
          )
        }
        defaultHandler(warning)
      },
      // Only what the host owns. dompurify stays bundled: it is absent from VC
      // Map's shared-externals map, so a plugin cannot reuse the host's copy.
      external: ['vue', 'i18next'],
      output: {
        globals: {
          vue: 'Vue',
          i18next: 'i18next',
        },
        assetFileNames: assetInfo =>
          assetInfo.names?.[0]?.endsWith('.css')
            ? 'style.css'
            : 'assets/[name]-[hash][extname]',
      },
    },
  },
})
