import { IPlayer } from "../../models/player.model";
import { IPlayerService } from "../../services/player.service";
import { IResearchService } from "../../services/research.service";
import MainService from "../MainService";
import PawnProvider from "../PawnProvider";

export default class Research extends PawnProvider {
  private _configuration: IResearchConfiguration;
  private _researchService: IResearchService;
  private _playerService: IPlayerService;
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

  preload() {
    this._researchService =
      this.game.scene.getScene<MainService>("MainService").researchService;
    this._playerService = this.game.scene.getScene<MainService>("MainService").playerService;
    this._loadConfiguration();
  }

  create() {
    this._drawGrid();
    const players: IPlayer[] = this._playerService.getPlayers();

    for (const player of players) {
      const environmentResearch = player.environmentResearch;
      const energyResearch = player.energyResearch;

      this._placePawn(environmentResearch, ResearchSide.Environment);
      this._placePawn(energyResearch, ResearchSide.Energy);
    }
  }

  update() {}

  private _loadConfiguration() {
    const columnWidth = this.cameras.main.width / 10;
    const rowHeight = this.cameras.main.height / 54;
    const rowSpacing = this.cameras.main.height / 54;
    const subLevelSpacing = rowSpacing / 2;
    const startX = this.cameras.main.width / 2 - columnWidth / 2 - rowSpacing / 2;
    const startY = rowSpacing * 2;
    const totalRows = 6;
    this._configuration = {
      columnWidth,
      rowHeight,
      rowSpacing,
      subLevelSpacing,
      startX,
      startY,
      totalRows,
    };
  }

  private _drawGrid() {
    const {
      columnWidth,
      rowHeight,
      rowSpacing,
      subLevelSpacing,
      startX,
      totalRows,
    } = this._configuration;

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
        //container.add(rectangle);

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
      drawColumn(startX, this._configuration.startY, subLevels, 0x00ff00, ResearchSide.Environment);

      // Draw the right column
      drawColumn(
        startX + columnWidth + rowSpacing,
        this._configuration.startY,
        subLevels,
        0x0000ff,
        ResearchSide.Energy
      );

      this._configuration.startY = this._configuration.startY + (rowHeight + subLevelSpacing) * subLevels + rowSpacing;
    }
  }

  private _placePawn(score: string, side: ResearchSide): void {
    const rectangle = side === ResearchSide.Environment
      ? this._environmentRectangles.get(score)
      : this._energyRectangles.get(score);

    if (rectangle != null) {
      const { columnWidth, rowHeight, rowSpacing, subLevelSpacing } = this._configuration;

      const pawn = this._getPawn();
      const { x, y, height } = rectangle;
      
      pawn.height = height;
      pawn.width = height;
      pawn.setPosition(x - columnWidth / 2 + pawn.width + rowSpacing / 2, y + rowHeight + subLevelSpacing + pawn.height);
    }
  }
}

enum ResearchSide {
  Environment,
  Energy,
}

interface IResearchConfiguration {
  columnWidth: number;
  rowHeight: number;
  rowSpacing: number;
  subLevelSpacing: number;
  startX: number;
  startY: number;
  totalRows: number;
}
