import { Scene } from "phaser";

export default class Research extends Scene {
  constructor() {
    super("Research");
  }

  preload() {}

  create() {
    this._createGrid();
  }

  update() {}

  private _createGrid() {
    const startX = 100; // Starting X position
    const startY = 100; // Starting Y position
    const cellWidth = 50; // Width of each cell
    const cellHeight = 50; // Height of each cell
    const padding = 10; // Padding between cells

    for (let row = 0; row < 2; row++) {
      let currentX = startX;
      for (let group = 1; group <= 6; group++) {
        for (let col = 0; col < group + 1; col++) {
          // Create a rectangle for each cell in the group
          const rect = this.add.rectangle(
            currentX + (cellWidth + padding) * col, // X position
            startY + (cellHeight + padding) * row, // Y position
            cellWidth,
            cellHeight,
            0xabcdef // Color of the rectangle
          );

          // Optionally, add text or other elements inside each cell
        }
        // Update currentX to move to the next group position
        currentX += (cellWidth + padding) * (group + 1);
      }
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
