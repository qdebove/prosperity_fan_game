import { IPlayer } from "../../models/player.model";
import { IGameManagerService } from "../../services/game-manager.service";
import MainService from "../MainService";
import PawnProvider from "../PawnProvider";

export default class Research extends PawnProvider {
  private _configuration: IResearchConfiguration;
  private readonly _environmentRectangles: Map<
  string,
  Phaser.GameObjects.Rectangle
  > = new Map();
  private readonly _energyRectangles: Map<
  string,
  Phaser.GameObjects.Rectangle
  > = new Map();

  private _gameManagerService: IGameManagerService;

  private _pawnY: number;

  constructor() {
    super("Research");
  }

  preload() {
    this._configuration = this._generateConfiguration();
    this._gameManagerService = this.game.scene.getScene<MainService>("MainService").gameManagerService;
  }

  create() {
    this._drawGrid();
    const players: IPlayer[] = this._gameManagerService.getPlayers();

    for(let i = 0; i < players.length; i++) {
      const player = players[i];

      this._placePawn(player, ResearchSide.Environment, players.length, i);
      this._placePawn(player, ResearchSide.Energy, players.length, i);
    }
  }

  update() {}

  private _generateConfiguration(): IResearchConfiguration {
    const columnWidth = this.cameras.main.width / 10;
    const rowHeight = this.cameras.main.height / 54;
    const rowSpacing = this.cameras.main.height / 54;
    const subLevelSpacing = rowSpacing / 2;
    const startX = this.cameras.main.width / 2 - columnWidth / 2 - rowSpacing / 2;
    const startY = rowSpacing * 2;
    const totalRows = 6;
    return {
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

  private _placePawn(player: IPlayer, side: ResearchSide, numberOfPawnWithSameScore: number = 2, position: number = 0): void {
    const rectangle = side === ResearchSide.Environment
      ? this._environmentRectangles.get(player.environmentResearch)
      : this._energyRectangles.get(player.energyResearch);

    if (rectangle != null) {
      const { columnWidth, rowHeight, rowSpacing, subLevelSpacing, } = this._configuration;

      const pawn = this._generatePawn(player);
      const { x, y, height } = rectangle;
      
      pawn.height = height;
      pawn.width = height;

      const startX = x - columnWidth / 2 + pawn.width + rowSpacing / 2;
      const pawnsWidth = pawn.width * numberOfPawnWithSameScore;
      const totalSpaceAvailable = columnWidth - pawnsWidth;
      const spaceBetweenPawns = totalSpaceAvailable / (numberOfPawnWithSameScore + 1);

      pawn.setPosition(startX + spaceBetweenPawns + pawn.width * position + (spaceBetweenPawns * position), y + rowHeight + subLevelSpacing + pawn.height);

      if(player.id === this._gameManagerService.getActivePlayer().id) {
        this._addDragEvents(pawn, side);
      }
    }
  }

  private _addDragEvents(pawn: Phaser.GameObjects.Shape, side: ResearchSide) {
    pawn.setInteractive({ cursor: 'pointer' });
    this.input.setDraggable(pawn);

    // TODO add vertical limits (actions to do)
    // TODO add memento if dragged
    // TODO check if can play
    this.input.on('dragstart', (_: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Shape) => {
      this._pawnY = gameObject.y;
    });

    this.input.on('drag', (_: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Shape, __: number, dragY: number) => {
      if (dragY <= this._pawnY) {
          gameObject.y = dragY; // Only update Y position, and only if above minY
      }
    });

    this.input.on('dragend', (_: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Shape) => {
      gameObject.y = this._pawnY;
    });
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
