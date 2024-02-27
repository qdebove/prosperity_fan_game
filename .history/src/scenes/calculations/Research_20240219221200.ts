import { Scene } from "phaser";

export default class Research extends Scene {
  constructor() {
    super("Research");
  }

  preload() {}

  create() {
    const startX = 100; // Starting X position for the grid
    const startY = 50; // Starting Y position for the grid
    const totalLevels = 6; // Total number of levels to display horizontally
    const rowWidth = 40; // Reduced width for each row to emphasize height
    const rowHeight = 80; // Increased height for each row
    const rowSpacing = 5; // Spacing between individual rows within a level
    const levelSpacing = 50; // Spacing before each level number and between sets of delimiters
    const delimiterWidth = 2; // Width of the delimiter line
    const delimiterSpacing = 10; // Spacing between the two delimiters

    let currentX = startX;

    for (let i = 1; i <= totalLevels; i++) {
      // Display the current level number before the first delimiter
      this.add
        .text(currentX, startY + rowHeight / 2, `${i}`, {
          fontSize: "16px",
          color: "#000",
        })
        .setOrigin(0.5, 0.5);

      // Adjust currentX to start drawing rows after the level number
      currentX += levelSpacing;

      // Draw the rows for the current level
      for (let j = 0; j < i; j++) {
        this.add.rectangle(
          currentX,
          startY + j * (rowHeight + rowSpacing),
          rowWidth,
          rowHeight,
          0x00ff00
        ); // Using green for rows
      }

      // Calculate the Y position to draw delimiters based on the number of rows
      let delimiterStartY = startY;
      let delimiterEndY = startY + i * (rowHeight + rowSpacing) - rowSpacing;

      // Draw the first vertical delimiter line after the rows
      const graphics = this.add.graphics({ fillStyle: { color: 0x000000 } }); // Black color for delimiters
      graphics.fillRect(
        currentX + rowWidth + delimiterSpacing,
        delimiterStartY,
        delimiterWidth,
        delimiterEndY - delimiterStartY
      );

      // Draw the second vertical delimiter line, spaced from the first one
      graphics.fillRect(
        currentX + rowWidth + delimiterSpacing * 2 + delimiterWidth,
        delimiterStartY,
        delimiterWidth,
        delimiterEndY - delimiterStartY
      );

      // Update currentX for the next level, accounting for the row width and both delimiters
      currentX +=
        rowWidth + delimiterSpacing * 2 + delimiterWidth * 2 + levelSpacing;
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
