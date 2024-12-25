import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

const createConfig = (format, fileName, outputExports = 'named', bundleDeps = false) => ({
  input: 'src/index.js',
  output: {
    file: fileName,
    format,
    name: format === 'umd' ? 'PopupTool' : undefined,
    globals: format === 'umd' && !bundleDeps ? {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-dom/client': 'ReactDOM'
    } : undefined,
    exports: outputExports
  },
  // Only mark dependencies as external for non-UMD builds or UMD builds without bundled deps
  external: bundleDeps ? [] : ['react', 'react-dom', 'react-dom/client'],
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify('production')
      }
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: ['.js']
    }),
    commonjs(),
    // Add terser for minification in production
    format === 'umd' && terser()
  ].filter(Boolean)
});

export default [
  // ESM build (for bundlers)
  createConfig('esm', 'dist/index.esm.js'),
  // CJS build (for Node.js)
  createConfig('cjs', 'dist/index.js'),
  // UMD build without bundled dependencies (smaller, requires React/ReactDOM)
  createConfig('umd', 'dist/popup-tool.umd.js'),
  // UMD build with bundled dependencies (larger, standalone)
  createConfig('umd', 'dist/popup-tool.standalone.umd.js', 'named', true)
];