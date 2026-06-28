export function drawTie(x,y){

return `
<g transform="translate(${x} ${y})">

<rect
x="-3"
y="-10"
width="6"
height="20"
fill="#666"/>

<circle
cx="0"
cy="0"
r="6"
fill="#999"/>

<rect
x="-12"
y="-10"
width="4"
height="20"
fill="#444"/>

<rect
x="8"
y="-10"
width="4"
height="20"
fill="#444"/>

</g>
`;

}
