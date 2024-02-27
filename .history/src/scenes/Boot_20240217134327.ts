import { Scene } from "phaser";

export default class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("main-menu-background", "assets/main-menu-background.png");
  }

  create() {
    this.scene.start("MainMenu");
  }
}
