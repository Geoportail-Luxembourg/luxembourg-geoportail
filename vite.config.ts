import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vitest/config'
import { loadEnv, type UserConfig } from 'vite'
// Note: `vite-plugin-istanbul` is ESM-only. Import it dynamically inside the
// config callback when coverage instrumentation is requested to avoid a
// "tried to load by `require`" error during build.
import vue from '@vitejs/plugin-vue'
import type { RootNode, TemplateChildNode } from '@vue/compiler-core'
import { resolve } from 'path'

function removeDataTestAttrs(node: RootNode | TemplateChildNode) {
  if (node.type === 1 /* NodeTypes.ELEMENT */) {
    node.props = node.props.filter(prop =>
      prop.type === 6 /* NodeTypes.ATTRIBUTE */ ? prop.name !== 'data-cy' : true
    )
  }
}

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const backendHost = 'http://localhost:8080' // used for local dev
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
    server: {
      proxy: {
        '/getvtstyle': {
          target: backendHost,
          changeOrigin: true,
          secure: false,
        },
        '/uploadvtstyle': {
          target: backendHost,
          changeOrigin: true,
          secure: false,
        },
        '/deletevtstyle': {
          target: backendHost,
          changeOrigin: true,
          secure: false,
        },
        '/getpermalinkstyle': {
          target: backendHost,
          changeOrigin: true,
          secure: false,
        },
        '/uploadpermalinkstyle': {
          target: backendHost,
          changeOrigin: true,
          secure: false,
        },
        '/deletepermalinkstyle': {
          target: backendHost,
          changeOrigin: true,
          secure: false,
        },
        '/getuserinfo': {
          target: backendHost,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }

  const env = loadEnv(mode, process.cwd(), '')
  if (env.INSTRUMENT_COVERAGE) {
    base.server = { hmr: false } // disable hot reload of files modified by coverage tests
    base.build = { sourcemap: 'hidden' } // disable warning which says coverage enabled by Istanbul
    // Dynamically import ESM-only plugin
    const IstanbulPlugin = (await import('vite-plugin-istanbul')).default
    base.plugins = [...(base.plugins || []), IstanbulPlugin()] // add Istanbul plugin for code instrumentation
  }

  if (command === 'build') {
    base.build = {
      ...(base.build ?? {}),
      manifest: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          'service-worker': resolve(__dirname, 'src/service-worker.ts'),
        },
        output: {
          entryFileNames: chunk =>
            chunk.name === 'service-worker'
              ? 'service-worker.js'
              : 'assets/[name]-[hash].js',
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
