import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vitest/config'
import { type UserConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import type { RootNode, TemplateChildNode } from '@vue/compiler-core'

function removeDataTestAttrs(node: RootNode | TemplateChildNode) {
  if (node.type === 1 /* NodeTypes.ELEMENT */) {
    node.props = node.props.filter(prop =>
      prop.type === 6 /* NodeTypes.ATTRIBUTE */ ? prop.name !== 'data-cy' : true
    )
  }
}

export default defineConfig(({ mode }) => {
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
    optimizeDeps: {
      exclude: ['ol', 'mapbox-gl'],
      force: false,
      disabled: true,
    },
  }

  base.build = {
    lib: {
      entry: resolve(__dirname, 'src/bundle/lib.ts'),
      name: 'luxembourg-geoportail',
      fileName: 'lux.dist',
      formats: ['es'], // outputs only bundle/lux.dist.mjs
    },
    commonjsOptions: {
      exclude: ['ol', 'mapbox-gl'],
    },
    outDir: 'bundle', // TODO: rename /dist
    rollupOptions: {
      external: [/^ol\/.*/, /mapbox-gl/],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    minify: mode === 'production',
  }

  return base
})
