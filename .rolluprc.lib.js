import {terser} from "rollup-plugin-terser";

import {output, plugins} from "./.rolluprc.common.js";

const minify = terser({output: {comments: () => false}});
const components = ["input/number"];

export default components
  .map(component => ({
    input: `src/${component}`,
    output: output(component),
    plugins: plugins([minify]),
  }))
  .concat([
    {
      input: "src",
      output: output(),
      plugins: plugins([minify]),
    },
  ]);
