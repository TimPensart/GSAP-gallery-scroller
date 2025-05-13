import { folderInput } from "rollup-plugin-folder-input";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

export default {
    input: ["source/scripts/*.js"],
    output: {
        dir: "dist/scripts/",
        format: "esm",
    },
    plugins: [folderInput(), nodeResolve(), commonjs(), babel({ babelHelpers: "bundled" }), terser()],
};
