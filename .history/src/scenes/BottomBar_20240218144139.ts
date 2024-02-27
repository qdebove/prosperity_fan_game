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
      100,
      0x000000
    );
    bar.setOrigin(0.5);

    const text = this.add.text(
      this.cameras.main.width / 2,
      this.cameras.main.height - 50,
      "Bottom Bar",
      { fontSize: "24px", color: "#ffffff" }
    );
    text.setOrigin(0.5);
  }
}
