import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import IstanbulPlugin from 'vite-plugin-istanbul'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base: UserConfig = {
    plugins: [vue(), IstanbulPlugin()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    test: {
      globals: true,
      setupFiles: 'vitest.setup.ts',
    },
  }

  if (command === 'build') {
    base.build = {
      // assetsInlineLimit: 0, // Imported or referenced assets that are smaller than this threshold will be inlined as base64 URLs to avoid extra http requests. Set to 0 to disable inlining altogether.
      rollupOptions: {
        output: {
          assetFileNames: chunkInfo => {
            if (/\.(gif|jpe?g|png|svg)$/.test(chunkInfo.name ?? '')) {
              return 'assets/images/[name]-[hash][extname]'
            }

            return 'assets/[name]-[hash][extname]'
          },
        },
      },
    }
  }

  return base
})
