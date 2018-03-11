import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
// import jsx from "rollup-plugin-jsx"
import postcss from "rollup-plugin-postcss"
// import image from "rollup-plugin-image"
import image from "rollup-plugin-img"
// import npm from "rollup-plugin-npm"

export default {
    input: "src/Gauge.js",
    output: {
        file: "dist/main.js",
        format: "cjs",
    },
    external: ['react'],
    plugins: [
        postcss({
            plugins: [],
            // extract: true,
        }),
        image(),
        // jsx({ factory: 'React.createElement' }),
        babel(),
        resolve(),
        commonjs(),
    ]
}
