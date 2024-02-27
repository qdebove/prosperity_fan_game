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
    const bottomBarHeight = 60;

    this.add.image(
      width / 10 + width / 5,
      height - bottomBarHeight / 2,
      "player-informations"
    );

    /*

    const slots = 4;
    const slotWidth = width / slots;

    for (let i = 0; i < slots; i++) {
      const x = slotWidth * i + slotWidth / 2;
      const y = height - bottomBarHeight / 2;

      this.add
        .rectangle(x, y, slotWidth - 10, bottomBarHeight, 0xfffffff, 80)
        .setOrigin(0.5, 0.5);
    }

    this.add.image(width / 2, height - bottomBarHeight / 2, "green-button");*/
  }
}
