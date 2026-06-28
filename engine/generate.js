import { createSVG, save } from "./utils/svg.js";

import { drawBackground } from "./draw/background.js";
import { drawGrid } from "./draw/grid.js";
import { drawStars } from "./draw/stars.js";
import { drawXWing } from "./sprites/xwing.js";

const width = 951;
const height = 169;

let svg = createSVG(width,height);

svg += drawBackground();

svg += drawStars();

svg += drawGrid();

svg += drawXWing(120, 80);

save(svg);

console.log("Engine OK");
