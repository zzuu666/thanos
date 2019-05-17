import babel from 'rollup-plugin-babel'

export default {
    input: './src/index.ts',
    output: {
        file: 'dist/output.js',
        format: 'cjs',
    },
    plugins: [
        babel({
            extensions: ['.ts', '.js']
        })
    ]
};
