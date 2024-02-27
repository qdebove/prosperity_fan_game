import { Scene } from "phaser";

export default class Research extends Scene {
  constructor() {
    super("Research");
  }

  preload() {}

  create() {
    const startX = 100; // X position to start drawing
    const startY = 50; // Y position to start drawing
    const totalRows = 6; // Total groups of rows to be displayed horizontally
    const rowWidth = 100; // Width of each row
    const rowHeight = 20; // Height of each row
    const rowSpacing = 10; // Spacing between rows
    const delimiterWidth = 2; // Width of the delimiter line
    const levelSpacing = 30; // Spacing before the level number

    let currentX = startX;

    for (let i = 1; i <= totalRows; i++) {
      // Display the current level number before the delimiter
      this.add
        .text(currentX - levelSpacing / 2, startY + rowHeight / 2, `${i}`, {
          fontSize: "16px",
          color: "#000",
        })
        .setOrigin(0.5);

      // Calculate the width occupied by the current set of rows and the delimiter
      let rowsWidth = i * rowWidth + (i - 1) * rowSpacing;
      let totalWidth = rowsWidth + delimiterWidth;

      // Draw the rows for the current level
      for (let j = 0; j < i; j++) {
        this.add.rectangle(
          currentX + j * (rowWidth + rowSpacing),
          startY,
          rowWidth,
          rowHeight,
          0x00ff00
        ); // Use green for rows
      }

      // Draw the vertical delimiter line after the rows
      const graphics = this.add.graphics({ fillStyle: { color: 0x000000 } }); // Use black for the delimiter
      graphics.fillRect(
        currentX + rowsWidth,
        startY,
        delimiterWidth,
        rowHeight
      );

      // Update currentX for the next set of rows and delimiter
      currentX += totalWidth + levelSpacing;
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
