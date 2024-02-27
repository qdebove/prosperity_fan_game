import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.add.image(0, 0, "main-menu-background").setOrigin(0);

    const { width, height } = this.sys.game.config as {
      width: number;
      height: number;
    };
    const bottomBarHeight = 100;
    const bottomBar = this.add
      .rectangle(
        0,
        height - bottomBarHeight,
        width,
        bottomBarHeight,
        0x000000,
        80
      )
      .setOrigin(0, 0);

    this.add.image(width / 2, height - bottomBarHeight / 2, "green-button");
  }
}
