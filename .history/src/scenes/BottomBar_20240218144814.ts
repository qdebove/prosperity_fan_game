import Phaser from "phaser";

export default class BottomBar extends Phaser.Scene {
  constructor() {
    super("BottomBar");
  }

  create() {
    const height = 100;
    const bar = this.add.rectangle(
      this.cameras.main.width / 2,
      this.cameras.main.height - height / 2,
      this.cameras.main.width,
      height,
      0x000000,
      50
    );
  }
}
