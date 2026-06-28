import { createSVG, save } from "./utils/svg.js";

import { drawBackground } from "./draw/background.js";
import { drawGrid } from "./draw/grid.js";
import { drawStars } from "./draw/stars.js";


import { drawXWing } from "./sprites/xwing.js";
import { drawTie } from "./sprites/tie.js";

const width = 951;
const height = 169;

let svg = createSVG(width, height);

svg += `
<defs>

<path
id="flightPath"
d="
M 80 120
C 250 20,
450 160,
850 80
"/>

</defs>
`;

svg += drawBackground();

svg += drawStars();

svg += drawGrid();

svg += drawXWing();
svg += drawTie(760,80);

save(svg);

console.log("Engine OK");
