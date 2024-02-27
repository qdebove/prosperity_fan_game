import Phaser from "phaser";

export default class BottomBar extends Phaser.Scene {
  constructor() {
    super("BottomBar");
  }

  create() {
    const bar = this.add.rectangle(
      this.cameras.main.width / 2,
      this.cameras.main.height - 25,
      this.cameras.main.width,
      50,
      0x000000,
      50
    );
  }
}
