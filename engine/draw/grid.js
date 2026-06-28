export function drawGrid(){

    const weeks = 53;
    const days = 7;

    const cell = 12;
    const gap = 5;

    const margin = 25;

    let svg = "";

    for(let x=0;x<weeks;x++){

        for(let y=0;y<days;y++){

            const px = margin + x*(cell+gap);
            const py = margin + y*(cell+gap);

            svg += `
<rect
x="${px}"
y="${py}"
width="${cell}"
height="${cell}"
rx="2"
fill="#0e4429"/>
`;

        }

    }

    return svg;

}
