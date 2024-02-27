import { Scene } from "phaser";

export default class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("main-menu-background", "assets/main-menu-background.png");
    this.load.image("blue-button", "assets/board/blue_button.png");
    this.load.image("green-button", "assets/board/green_button.png");
    this.load.image("red-button", "assets/board/red_button.png");
    this.load.image("yellow-button", "assets/board/yellow_button.png");
  }

  create() {
    this.scene.start("MainMenu");
  }
}
