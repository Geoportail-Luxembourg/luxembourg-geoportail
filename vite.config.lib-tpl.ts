// vite.config.lib-tpl.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    dts({ tsconfigPath: './tsconfig.lib-tpl.json' }), // creates a .d.ts file for the library
  ],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss/nesting'),
        require('tailwindcss')('./tailwind.config.lib-tpl.cjs'),
      ],
    },
  },
  build: {
    outDir: 'dist-lux-tpl',
    lib: {
      entry: resolve(__dirname, 'src/lib-tpl/index.ts'),
      name: 'LuxTemplateLibrary',
      fileName: 'lux-tpl',
      formats: ['es'], // and/or 'cjs'
    },
    rollupOptions: {
      external: ['vue', 'i18next-vue'], // Exclude Vue and i18next-vue from the bundle
      output: {
        globals: {
          vue: 'Vue',
          'i18next-vue': 'i18nextVue',
        },
      },
    },
  },
})
