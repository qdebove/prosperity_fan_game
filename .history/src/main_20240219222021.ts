import Boot from "./scenes/Boot";
import BottomBar from "./scenes/BottomBar";
import { MainMenu } from "./scenes/MainMenu";

import { Game, Types } from "phaser";
import { ScoreDisplayer } from "./scenes/ScoreDisplayer";
import Capital from "./scenes/calculations/Capital";
import Energy from "./scenes/calculations/Energy";
import Environment from "./scenes/calculations/Environment";
import Prosperity from "./scenes/calculations/Prosperity";
import Research from "./scenes/calculations/Research";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "game-container",
  backgroundColor: "#00000000",
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
  ],
};

export default new Game(config);
