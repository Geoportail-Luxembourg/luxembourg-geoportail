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
      exclude: ["@vue/runtime-core", "@vue/shared", "@vue/runtime-dom"],
      force: false,
      disabled: true,
    }
  }

  base.build = {
    // Imported or referenced assets that are smaller than this threshold will be inlined as base64 URLs to avoid extra http requests. Set to 0 to disable inlining altogether.
    // If you specify build.lib, build.assetsInlineLimit will be ignored and assets will always be inlined, regardless of file size or being a Git LFS placeholder.
    // assetsInlineLimit: 0,
    minify: true,
    cssMinify: true,
    lib: {
      entry: resolve(__dirname, 'src/bundle/lib.ts'),
      name: 'luxembourg-geoportail',
      fileName: 'lux.dist',
    },
    commonjsOptions: {
      exclude: ["@vue/runtime-core", "@vue/shared", "@vue/runtime-dom"],
    },
    outDir: 'bundle', // TODO: rename /dist
    rollupOptions: {
      external: ['vue', "@vue/runtime-core", "@vue/shared", "@vue/runtime-dom"],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  }

  return base
})
