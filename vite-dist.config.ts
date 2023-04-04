import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vitest/config'
import { loadEnv, type UserConfig } from 'vite'
import { resolve } from 'path'
import IstanbulPlugin from 'vite-plugin-istanbul'
import vue from '@vitejs/plugin-vue'
import type { RootNode, TemplateChildNode } from '@vue/compiler-core'

function removeDataTestAttrs(node: RootNode | TemplateChildNode) {
  if (node.type === 1 /* NodeTypes.ELEMENT */) {
    node.props = node.props.filter(prop =>
      prop.type === 6 /* NodeTypes.ATTRIBUTE */ ? prop.name !== 'data-cy' : true
    )
  }
}

export default defineConfig(({ command, mode }) => {
  const base: UserConfig = {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            nodeTransforms: [removeDataTestAttrs],
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

  base.build = {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib',
    },
    outDir: 'bundle', // TODO: rename /dist
    // assetsInlineLimit: 0, // Imported or referenced assets that are smaller than this threshold will be inlined as base64 URLs to avoid extra http requests. Set to 0 to disable inlining altogether.
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: chunkInfo => {
          if (/\.(gif|jpe?g|png|svg)$/.test(chunkInfo.name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }

          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  }

  return base
})
