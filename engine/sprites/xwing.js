export function drawXWing(x,y){

return `
<g transform="translate(${x} ${y})">

<polygon
points="
0,-10
14,0
0,10
-5,4
-5,-4"
fill="#dddddd"/>

<circle
cx="-3"
cy="0"
r="2"
fill="#00ccff"/>

</g>
`;

}
