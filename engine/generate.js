import { createSVG, save } from "./utils/svg.js";

import { drawGrid } from "./draw/grid.js";

const width = 926;
const height = 169;

let svg = createSVG(width, height);

svg += drawGrid();

save(svg);
