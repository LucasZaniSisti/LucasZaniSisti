import fs from "fs";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="900"
     height="220">

<rect
width="100%"
height="100%"
fill="black"/>

<text
x="50%"
y="50%"
text-anchor="middle"
fill="#00ff88"
font-size="28">

Galactic Engine Online

</text>

</svg>
`;

fs.mkdirSync("../output", { recursive: true });

fs.writeFileSync("../output/starwars.svg", svg);

console.log("SVG criado.");
