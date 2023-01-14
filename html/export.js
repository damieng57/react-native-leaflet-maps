const fs = require("fs");

const bundle = fs.readFileSync("./dist/index.html", "utf8");

const escaped = JSON.stringify(bundle);
const js = `const LEAFLET_HTML_SOURCE = ${escaped};
export default LEAFLET_HTML_SOURCE;
`;

fs.writeFileSync("../src/assets/html.ts", js);