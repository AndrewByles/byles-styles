import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import progress from 'rollup-plugin-progress';
import filesize from 'rollup-plugin-filesize';
import eslint from 'rollup-plugin-eslint';

const build = process.env.build || false;
const config = {
    input: 'js/index.js',
    output: {
        file: 'dist/byles-styles.min.js',
        format: 'iife'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        eslint({
            exclude: 'node_modules/**'
        }),
        build ? uglify() : {},
        progress({
            clearLine: false
        }),
        filesize(),
    ]
};

if (!build) {
    config.output.file = 'public/byles-styles.js';
    config.output.sourcemap = true;
}

export default config;
