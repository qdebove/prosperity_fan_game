import { Scene } from "phaser";

export default class Energy extends Scene {
  constructor() {
    super("Energy");
  }

  preload() {}

  create() {
    this.add.text(100, 100, "Energy Scene", { color: "#0f0" });
  }

  update() {}
}
