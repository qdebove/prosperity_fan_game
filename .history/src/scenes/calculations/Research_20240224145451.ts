import { Scene } from "phaser";

export default class Research extends Scene {
  private readonly _environmentRectangles: Map<
    string,
    Phaser.GameObjects.Rectangle
  > = new Map();
  private readonly _energyRectangles: Map<
    string,
    Phaser.GameObjects.Rectangle
  > = new Map();

  constructor() {
    super("Research");
  }

  preload() {}

  create() {
    this._drawGrid();
  }

  update() {}

  private _drawGrid() {
    const columnWidth = this.cameras.main.width / 10;
    const rowHeight = this.cameras.main.height / 54;
    const rowSpacing = this.cameras.main.height / 54;
    const subLevelSpacing = rowSpacing / 2;
    const startX = 0;
    let startY = rowSpacing * 2;
    const totalRows = 6;
    const container = this.add.container(
      this.cameras.main.width / 2 - columnWidth / 2 - rowSpacing / 2,
      0
    );

    const drawColumn = (
      x: number,
      y: number,
      levels: number,
      color: number,
      side: ResearchSide
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
        const key = `${levels - 1}.${j + 1}`;
        if (side === ResearchSide.Environment) {
          this._environmentRectangles.set(key, rectangle);
        } else {
          this._energyRectangles.set(key, rectangle);
        }
      }
    };

    for (let i = 0; i < totalRows; i++) {
      const subLevels = totalRows - i + 1;

      // Draw the left column
      drawColumn(startX, startY, subLevels, 0x00ff00, ResearchSide.Environment);

      // Draw the right column
      drawColumn(
        startX + columnWidth + rowSpacing,
        startY,
        subLevels,
        0x0000ff,
        ResearchSide.Energy
      );

      startY += (rowHeight + subLevelSpacing) * subLevels + rowSpacing;
    }

    console.log(this._environmentRectangles);
  }
}

enum ResearchSide {
  Environment,
  Energy,
}
