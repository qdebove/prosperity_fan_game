import { Scene } from "phaser";

export default class Research extends Scene {
  constructor() {
    super("Research");
  }

  preload() {}

  create() {
    this._drawGrid();
  }

  update() {}

  private _drawGrid() {
    const columnWidth = 100;
    const rowHeight = 20;
    const rowSpacing = 10;
    const subLevelSpacing = 5;
    const startX = 100;
    let startY = 50;
    const totalRows = 6;

    const drawColumn = (
      x: number,
      y: number,
      levels: number,
      color: number
    ) => {
      for (let j = 0; j < levels; j++) {
        this.add.rectangle(x, y, columnWidth, rowHeight, color);
        y += rowHeight + subLevelSpacing;
      }
    };

    for (let i = 0; i < totalRows; i++) {
      const subLevels = totalRows - i + 1;
      let currentY = startY;

      // Draw the left column
      drawColumn(startX, currentY, subLevels, 0x00ff00);

      // Draw the right column
      drawColumn(
        startX + columnWidth + rowSpacing,
        currentY,
        subLevels,
        0x0000ff
      );

      startY += (rowHeight + subLevelSpacing) * subLevels + rowSpacing;
    }
  }
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
