import Phaser from "phaser";
import { Calculation } from "../enums/calculation.enum";
import { Events } from "../enums/events.enum";

export default class BottomBar extends Phaser.Scene {
  private readonly _calculations: Calculation[] = [
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

    const slotWidth = this.cameras.main.width / this._calculations.length;

    this._calculations.forEach((calculation, index) => {
      const x = slotWidth * index + slotWidth / 2;
      const y = this.cameras.main.height - height / 2 - 10;

      const container = this.add.container(x, y);

      const rectangle = this.add
        .rectangle(0, 0, slotWidth - 10, height, 0xfffffff, 80)
        .setOrigin(0.5, 0.5);
      container.add(rectangle);
      container.setSize(slotWidth - 10, height);

      const image = this.add.image(
        rectangle.x - rectangle.width / 2 + height / 2,
        0,
        `${calculation}_1970`
      );
      image.displayWidth = height;
      image.displayHeight = height;
      container.add(image);

      const text = this.add.text(
        rectangle.x + rectangle.width / 2 - 10,
        0,
        "0",
        {
          fontSize: "24px",
        }
      );
      text.setFill("#000000");
      text.setOrigin(1, 0.5);
      container.add(text);

      container.setInteractive({ cursor: "pointer" });
      container.on("pointerdown", () => {
        this.events.emit(Events.SWITCH_VIEW, calculation);
      });
    });
  }
}
