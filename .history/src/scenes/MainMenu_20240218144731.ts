import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    const image = this.add.image(0, 0, "main-menu-background").setOrigin(0);
    image.displayWidth = this.cameras.main.width;
    /*
    const { width, height } = this.sys.game.config as {
      width: number;
      height: number;
    };
    const bottomBarHeight = 60;

    const playerInformations = this.add.image(
      width / 20,
      height - bottomBarHeight / 2,
      "player-informations"
    );
    playerInformations.setOrigin(0.5, 0.75);*/

    this.scene.launch("BottomBar");

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
