import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    const image = this.add.image(0, 0, "main-menu-background").setOrigin(0);
    image.displayWidth = this.cameras.main.width;
    image.displayHeight = this.cameras.main.height;
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
  }
}
