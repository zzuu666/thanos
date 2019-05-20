import babel from 'rollup-plugin-babel'
import {uglify} from 'rollup-plugin-uglify'

export default {
    input: './src/index.ts',
    output: [
        {
            file: 'dist/thanos.min.js',
            format: 'umd',
            name: 'Thanos',
            globals: {
                html2canvas: 'html2canvas'
            }
        }
    ],
    plugins: [
        babel({
            extensions: ['.ts', '.js']
        }),
        uglify()
    ],
    external: ['html2canvas']
};
