import { Scene } from "phaser";

export default class Research extends Scene {
  constructor() {
    super("Research");
  }

  preload() {}

  create() {
    const columnWidth = 100; // Width of each column
    const rowHeight = 20; // Height of each row
    const rowSpacing = 10; // Spacing between rows
    const subLevelSpacing = 5; // Spacing between sub-levels within a row
    const startX = 100; // X position to start drawing the grid
    let startY = 50; // Y position to start drawing the grid
    const totalRows = 6; // Total groups of rows
    const triangleHeight = 30; // Height of the equilateral triangle

    // Function to draw an equilateral triangle
    const drawTriangle = (
      baseX: number,
      baseY: number,
      height: number,
      isLeft: boolean,
      level: number
    ) => {
      const graphics = this.add.graphics({ fillStyle: { color: 0xffff00 } }); // Using yellow for the triangle
      const direction = isLeft ? -1 : 1; // Determines the direction to offset the triangle's base

      // Calculate the triangle's points
      const p1 = { x: baseX, y: baseY }; // Base-left or base-right point
      const p2 = {
        x: baseX + (direction * height * Math.sqrt(3)) / 2,
        y: baseY,
      }; // Base-right or base-left point
      const p3 = {
        x: baseX + (direction * height * Math.sqrt(3)) / 4,
        y: baseY - height,
      }; // Top point

      // Draw the triangle
      graphics.fillTriangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

      // Add level number inside the triangle
      this.add
        .text(p3.x, p3.y + height / 2, `${level}`, {
          fontSize: "16px",
          color: "#000",
        })
        .setOrigin(0.5);
    };

    const drawColumn = (
      x: number,
      y: number,
      levels: number,
      color: number,
      isLeft: boolean
    ) => {
      for (let j = 0; j < levels; j++) {
        this.add.rectangle(x, y, columnWidth, rowHeight, color);
        y += rowHeight + subLevelSpacing;
      }

      // Calculate the position for the triangle
      let triangleBaseY =
        y - ((rowHeight + subLevelSpacing) * levels) / 2 + rowHeight / 2;
      let triangleBaseX = isLeft
        ? x - (triangleHeight * Math.sqrt(3)) / 2
        : x + columnWidth + (triangleHeight * Math.sqrt(3)) / 2;

      // Draw the triangle for the group of rows
      drawTriangle.call(
        this,
        triangleBaseX,
        triangleBaseY,
        triangleHeight,
        isLeft,
        levels
      );
    };

    for (let i = 0; i < totalRows; i++) {
      const subLevels = i + 1; // Calculate sub-levels for each row group
      let currentY = startY;

      // Draw the left column with a triangle to the left
      drawColumn.call(this, startX, currentY, subLevels, 0x00ff00, true); // Green rectangles

      // Draw the right column with a triangle to the right, adjusted X position
      drawColumn.call(
        this,
        startX + columnWidth + rowSpacing,
        currentY,
        subLevels,
        0x0000ff,
        false
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
