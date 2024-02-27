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
    const container = this.add.container(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2
    );

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
        const rectangle = this.add.rectangle(
          x,
          y,
          columnWidth,
          rowHeight,
          color
        );
        y += rowHeight + subLevelSpacing;
        container.add(rectangle);
      }
    };

    for (let i = 0; i < totalRows; i++) {
      const subLevels = totalRows - i + 1;

      // Draw the left column
      drawColumn(startX, startY, subLevels, 0x00ff00);

      // Draw the right column
      drawColumn(
        startX + columnWidth + rowSpacing,
        startY,
        subLevels,
        0x0000ff
      );

      startY += (rowHeight + subLevelSpacing) * subLevels + rowSpacing;
    }
  }
}
