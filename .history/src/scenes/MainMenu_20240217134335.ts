import { GameObjects, Scene } from "phaser";

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;

  constructor() {
    super("MainMenu");
  }

  create() {
    this.background = this.add.image(0, 0, "main-menu-background").setOrigin(0);
    this.logo = this.add.image(512, 100, "logo");
    this.title = this.add.text(512, 300, "My Awesome Game", {
      fontSize: "64px",
      color: "#fff",
    });
    this.title.setOrigin(0.5);
  }
}
