import os
from datetime import datetime

os.makedirs("output", exist_ok=True)

# MVP: grid fake estilo "galaxy radar"
grid = []

for y in range(10):
    row = []
    for x in range(52):
        if (x + y + datetime.now().day) % 7 == 0:
            row.append("🟦")  # vazio espacial
        else:
            row.append("🟩")  # "energia de commit"
    grid.append("".join(row))

svg_content = f"""
<svg width="900" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black"/>

  <text x="20" y="30" fill="lime" font-size="14">
  STAR WARS CONTRIBUTION GRID - INITIALIZED
  </text>

  <text x="20" y="60" fill="white" font-size="10">
  {chr(10).join(grid)}
  </text>

  <text x="20" y="180" fill="cyan" font-size="12">
  May the Source be with you
  </text>
</svg>
"""

with open("output/starwars.svg", "w") as f:
    f.write(svg_content)

print("SVG generated")
