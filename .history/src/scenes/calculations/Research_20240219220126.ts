import { Scene } from "phaser";

export default class Research extends Scene {
  constructor() {
    super("Research");
  }

  preload() {}

  create() {
    const columnWidth = 100; // Width of each column
    const rowHeight = 20; // Height of each row
    const triangleSide = 30; // Side length of the equilateral triangle
    const rowSpacing = 10; // Spacing between rows
    const subLevelSpacing = 5; // Spacing between sub-levels within a row
    const startX = 100; // X position to start drawing the grid
    let startY = 50; // Y position to start drawing the grid
    const totalRows = 6; // Total groups of rows

    const drawTriangle = (
      x: number,
      y: number,
      side: number,
      level: number
    ) => {
      const height = (side * Math.sqrt(3)) / 2; // Height of an equilateral triangle
      const graphics = this.add.graphics({ fillStyle: { color: 0xffff00 } }); // Using yellow for visibility

      // Calculate the vertices of the triangle
      const p1 = { x: x, y: y - height / 2 };
      const p2 = { x: x - side / 2, y: y + height / 2 };
      const p3 = { x: x + side / 2, y: y + height / 2 };

      // Draw the triangle
      graphics.fillTriangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

      // Add text at the center of the triangle
      this.add
        .text(x, y - height / 4, `${level}`, {
          fontSize: "14px",
          color: "#000",
          align: "center",
        })
        .setOrigin(0.5);
    };

    const drawColumn = (
      x: number,
      y: number,
      levels: number,
      color: number
    ) => {
      for (let j = 0; j < levels; j++) {
        this.add.rectangle(x, y, columnWidth, rowHeight, color);
        // Center the triangle in the middle of the row, adjust y position accordingly
        drawTriangle.call(
          this,
          x + columnWidth / 2,
          y + rowHeight / 2,
          triangleSide,
          j + 1
        );
        y += rowHeight + subLevelSpacing;
      }
    };

    for (let i = 0; i < totalRows; i++) {
      const subLevels = i + 1; // Calculate sub-levels for each row group
      let currentY = startY;

      // Draw the left column
      drawColumn.call(this, startX, currentY, subLevels, 0x00ff00); // Green rectangles

      // Draw the right column, adjusted X position
      drawColumn.call(
        this,
        startX + columnWidth + rowSpacing,
        currentY,
        subLevels,
        0x0000ff
      ); // Blue rectangles

      // Update startY for the next group of rows
      startY += (rowHeight + subLevelSpacing) * subLevels + rowSpacing;
    }
  }

  update() {}
}

/**
 * const columnWidth = 100; // Width of each column
    const rowHeight = 20; // Height of each row
    const rowSpacing = 10; // Spacing between rows
    const subLevelSpacing = 5; // Spacing between sub-levels within a row

    const startX = 100; // X position to start drawing the grid
    let startY = 50; // Y position to start drawing the grid

    const totalRows = 7; // Total groups of rows

    let currentY = startY;

    for (let i = 0; i < totalRows - 1; i++) {
      const subLevels = totalRows - i; // Number of sub-levels in the current row
      let currentX = startX;

      // Draw the left column for the current row group
      for (let j = 0; j < subLevels; j++) {
        // Assuming we're using rectangles to represent each sub-level
        this.add.rectangle(
          currentX,
          currentY,
          columnWidth,
          rowHeight,
          0x00ff00
        );
        currentY += rowHeight + subLevelSpacing;
      }

      // Reset Y position for the right column
      currentY = startY;

      // Draw the right column for the current row group
      currentX += columnWidth + rowSpacing; // Move to the right column
      for (let j = 0; j < subLevels; j++) {
        this.add.rectangle(
          currentX,
          currentY,
          columnWidth,
          rowHeight,
          0x0000ff
        );
        currentY += rowHeight + subLevelSpacing;
      }

      // Prepare startY for the next group of rows
      startY = currentY + rowSpacing; // Add extra space before the next group
      currentY = startY;
    }
 */
