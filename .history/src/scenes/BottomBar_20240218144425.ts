import Phaser from "phaser";

export default class BottomBar extends Phaser.Scene {
  constructor() {
    super("BottomBar");
  }

  create() {
    const bar = this.add.rectangle(
      this.cameras.main.width / 2,
      this.cameras.main.height - 50,
      this.cameras.main.width,
      50,
      0x000000,
      50
    );
    bar.setOrigin(0.5);
  }
}
