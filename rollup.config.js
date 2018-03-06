import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import jsx from "rollup-plugin-jsx"
import postcss from "rollup-plugin-postcss"
import image from "rollup-plugin-image"

export default {
    input: "src/index.js",
    output: {
        file: "dist/main.js",
        format: "cjs",
    },
    plugins: [
        postcss({
            plugins: [],
            // extract: true,
        }),
        image(),
        jsx({ factory: 'React.createElement' }),
        resolve(),
        commonjs(),
        babel(),
    ]
}
