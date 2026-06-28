import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createSVG(width, height) {

    return `
<svg
xmlns="http://www.w3.org/2000/svg"
width="${width}"
height="${height}"
viewBox="0 0 ${width} ${height}">
`;

}

export function closeSVG(svg){

    return svg + "\n</svg>";

}

export function save(svg){

    const output = path.join(
        __dirname,
        "..",
        "..",
        "output"
    );

    fs.mkdirSync(output,{recursive:true});

    fs.writeFileSync(
        path.join(output,"starwars.svg"),
        closeSVG(svg)
    );

}
