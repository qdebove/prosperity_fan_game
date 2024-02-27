import { PlayerColor } from "./player.model";

export abstract class BaseScene extends Phaser.Scene {
  constructor(key: string) {
    super(key);
  }

  protected _getCubeFromPlayerColor(
    color: PlayerColor
  ): Phaser.GameObjects.Shape {
    return this.add.rectangle(0, 0, 0, 0, 0);
  }
}
