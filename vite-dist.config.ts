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

export default defineConfig(({ command, mode }) => {
  const base: UserConfig = {
    base: 'http://localhost:8080/dev/main.html/', // set base url to dev for now (to allow switching themes on dev)
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
      exclude: ['@vue/runtime-core', '@vue/shared', '@vue/runtime-dom'],
      force: false,
      disabled: true,
    },
  }

  base.build = {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/bundle/lib.ts'),
      name: 'luxembourg-geoportail',
      fileName: 'lux.dist',
    },
    commonjsOptions: {
      exclude: ['@vue/runtime-core', '@vue/shared', '@vue/runtime-dom'],
    },
    outDir: 'bundle', // TODO: rename /dist
    rollupOptions: {
      external: ['vue', '@vue/runtime-core', '@vue/shared', '@vue/runtime-dom'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  }

  return base
})
