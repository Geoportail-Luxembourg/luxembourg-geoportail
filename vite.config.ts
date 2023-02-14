import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import type { UserConfig } from 'vite'
import IstanbulPlugin from 'vite-plugin-istanbul'
import vue from '@vitejs/plugin-vue'

function removeDataTestAttrs(node/*: RootNode | TemplateChildNode*/) {
  if (node.type === 1 /* NodeTypes.ELEMENT */) {
    node.props = node.props.filter(prop =>
      prop.type === 6 /* NodeTypes.ATTRIBUTE */
        ? prop.name !== 'data-cy'
        : true
    )
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const base: UserConfig = {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            nodeTransforms: mode !== 'e2e' && mode !== 'development' ? [removeDataTestAttrs] : [],
          },
        },
      }),
      IstanbulPlugin()
    ],
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
