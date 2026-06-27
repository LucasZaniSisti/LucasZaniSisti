let svg = createSVG();

svg += drawBackground();
svg += drawGrid();
svg += drawStars();
svg += drawTie();
svg += drawXWing();

save(svg);
