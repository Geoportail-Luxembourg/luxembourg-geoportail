import babel from 'rollup-plugin-babel'

export default {
  input: 'bundle/lux.dist.mjs',
  output: {
    file: 'bundle/lux.dist.js',
    format: 'umd', // or 'cjs', 'es', 'iife', etc.
    name: 'lux v4',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
