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
