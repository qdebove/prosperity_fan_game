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
    this.load.image(
      "player-informations",
      "assets/board/player_informations.png"
    );
    this.load.image("capital_1970", "assets/board/capital_1970.png");
    this.load.image("energy_1970", "assets/board/energy_1970.png");
    this.load.image("environment_1970", "assets/board/environment_1970.png");
    this.load.image("research_1970", "assets/board/research_1970.png");
    this.load.image("prosperity_1970", "assets/board/prosperity_1970.png");
    console.log("Boot preload");
  }

  create() {
    this.scene.start("MainMenu");
  }
}
