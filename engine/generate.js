import { createSVG, save } from "./utils/svg.js";

import { drawBackground } from "./draw/background.js";
import { drawGrid } from "./draw/grid.js";
import { drawStars } from "./draw/stars.js";

const width = 951;
const height = 169;

let svg = createSVG(width,height);

svg += drawBackground();

svg += drawGrid();

svg += drawStars();

save(svg);

console.log("Engine OK");
