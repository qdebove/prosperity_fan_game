import "reflect-metadata";

import { Game, Types } from "phaser";
import gameContainer from "./inversify/game-container.config";
import Research from "./scenes/calculations/Research";

const researchScene = gameContainer.resolve<Research>(Research);

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "game-container",
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [researchScene],
};

export default new Game(config);
