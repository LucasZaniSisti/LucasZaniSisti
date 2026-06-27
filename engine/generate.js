import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, "..", "output");

fs.mkdirSync(outputDir, { recursive: true });

// ===============================
// Configuração do mapa
// ===============================

const weeks = 53;
const days = 7;

const cell = 12;
const gap = 5;

const margin = 25;

const width = margin * 2 + weeks * (cell + gap);
const height = margin * 2 + days * (cell + gap);

// ===============================
// SVG
// ===============================

let svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="${width}"
     height="${height}"
     viewBox="0 0 ${width} ${height}">

<rect
    width="100%"
    height="100%"
    fill="#000000"/>
`;

// ===============================
// Desenha o grid
// ===============================

for (let x = 0; x < weeks; x++) {

    for (let y = 0; y < days; y++) {

        const cx = margin + x * (cell + gap);
        const cy = margin + y * (cell + gap);

        svg += `
        <rect
            x="${cx}"
            y="${cy}"
            rx="2"
            width="${cell}"
            height="${cell}"
            fill="#0e4429"
        />
        `;
    }

}

svg += `
</svg>
`;

fs.writeFileSync(
    path.join(outputDir, "starwars.svg"),
    svg
);

console.log("StarWars Grid criado!");
