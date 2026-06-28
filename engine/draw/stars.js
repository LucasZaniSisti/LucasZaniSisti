export function drawStars(){

    let svg = "";

    const stars = 120;

    const width = 951;
    const height = 169;

    for(let i=0;i<stars;i++){

        const x = Math.random() * width;
        const y = Math.random() * height;

        const r = Math.random() * 1.5 + 0.2;

        const opacity = Math.random() * 0.8 + 0.2;

        svg += `
<circle
cx="${x}"
cy="${y}"
r="${r}"
fill="white"
opacity="${opacity}"/>
`;

    }

    return svg;

}
