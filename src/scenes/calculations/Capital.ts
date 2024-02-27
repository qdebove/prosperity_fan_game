import { Scene } from "phaser";

export default class Capital extends Scene {
  constructor() {
    super("Capital");
  }

  preload() {}

  create() {
    this.add.text(100, 100, "Capital Scene", { color: "#0f0" });
  }

  update() {}
}
