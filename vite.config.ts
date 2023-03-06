import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import { loadEnv, type UserConfig } from 'vite'
import IstanbulPlugin from 'vite-plugin-istanbul'
import vue from '@vitejs/plugin-vue'

function removeDataTestAttrs(node /*: RootNode | TemplateChildNode*/) {
  if (node.type === 1 /* NodeTypes.ELEMENT */) {
    node.props = node.props.filter(prop =>
      prop.type === 6 /* NodeTypes.ATTRIBUTE */ ? prop.name !== 'data-cy' : true
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
            nodeTransforms: mode === 'production' ? [removeDataTestAttrs] : [],
          },
        },
      }),
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

  const env = loadEnv(mode, process.cwd(), '')
  if (env.INSRUMENT_COVERAGE) {
    base.server = { hmr: false } // disable hot reload of files modified by coverage tests
    base.build = { sourcemap: 'hidden' } // disable warning which says coverage enabled by Istanbul
    base.plugins = [...(base.plugins || []), IstanbulPlugin()] // add Istanbul plugin for code instrumentation
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
