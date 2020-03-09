import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const dev = process.env.ROLLUP_WATCH;

export default {
  input: {
    bundle: 'src/index.js'
  },
  output: {
    dir: 'dist/',
    format: 'es'
  },
  plugins: [
    dev &&
      serve({
        port: 9000,
        contentBase: 'dist'
      }),
    dev && livereload(),
    commonjs(),
    resolve(),
    postcss(),
    !dev && terser()
  ]
};
