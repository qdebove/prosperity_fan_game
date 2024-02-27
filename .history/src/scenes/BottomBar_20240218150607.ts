import Phaser from "phaser";
import { Calculation } from "../enums/calculation.enum";

export default class BottomBar extends Phaser.Scene {
  private readonly calculations: Calculation[] = [
    Calculation.Energy,
    Calculation.Environment,
    Calculation.Capital,
    Calculation.Research,
    Calculation.Prosperity,
  ];

  constructor() {
    super("BottomBar");
  }

  create() {
    const height = 100;

    /*

    const slots = 4;
    const slotWidth = width / slots;

    for (let i = 0; i < slots; i++) {
      const x = slotWidth * i + slotWidth / 2;
      const y = height - bottomBarHeight / 2;

      this.add
        .rectangle(x, y, slotWidth - 10, bottomBarHeight, 0xfffffff, 80)
        .setOrigin(0.5, 0.5);
    }

    this.add.image(width / 2, height - bottomBarHeight / 2, "green-button");*/

    const slotWidth = this.cameras.main.width / this.calculations.length;

    this.calculations.forEach((calculation, index) => {
      const x = slotWidth * index + slotWidth / 2;
      const y = this.cameras.main.height - height / 2 - 10;

      const container = this.add.container(x, y);
      container.setDisplaySize(slotWidth - 10, height);

      const rectangle = this.add.rectangle(0, 0).setOrigin(0.5, 0.5);
      container.add(rectangle);
    });
  }
}
