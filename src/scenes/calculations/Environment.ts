import { Scene } from "phaser";

export default class Environment extends Scene {
  constructor() {
    super("Environment");
  }

  preload() {}

  create() {
    this.add.text(100, 100, "Environment Scene", { color: "#0f0" });
  }

  update() {}
}
