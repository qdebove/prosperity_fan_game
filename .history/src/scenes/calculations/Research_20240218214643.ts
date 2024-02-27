import { Scene } from "phaser";

export default class Research extends Scene {
  constructor() {
    super("Research");
  }

  preload() {}

  create() {
    this.add.text(100, 100, "Research Scene", { color: "#0f0" });
  }

  update() {}
}
