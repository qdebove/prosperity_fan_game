import { Scene } from "phaser";

export default class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("background", "assets/background.png");
    this.load.image("logo", "assets/logo.png");
  }

  create() {
    this.scene.start("MainMenu");
  }
}
