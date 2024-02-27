import "reflect-metadata";
import Boot from "./scenes/Boot";
import BottomBar from "./scenes/BottomBar";
import { MainMenu } from "./scenes/MainMenu";

import { Game, Types } from "phaser";
import MainService from "./scenes/MainService";
import { ScoreDisplayer } from "./scenes/ScoreDisplayer";
import Capital from "./scenes/calculations/Capital";
import Energy from "./scenes/calculations/Energy";
import Environment from "./scenes/calculations/Environment";
import Prosperity from "./scenes/calculations/Prosperity";
import Research from "./scenes/calculations/Research";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "game-container",
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [
    Boot,
    MainMenu,
    BottomBar,
    ScoreDisplayer,
    Capital,
    Energy,
    Environment,
    Prosperity,
    Research,
    MainService,
  ],
};

export default new Game(config);
