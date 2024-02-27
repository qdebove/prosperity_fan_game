import { Scene } from "phaser";

export default class Prosperity extends Scene {
  constructor() {
    super("Prosperity");
  }

  preload() {}

  create() {
    this.add.text(100, 100, "Prosperity Scene", { color: "#0f0" });
  }

  update() {}
}
