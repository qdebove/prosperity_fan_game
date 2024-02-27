import { Scene } from "phaser";
import { Calculation } from "../enums/calculation.enum";

type CalculationType = (typeof Calculation)[keyof typeof Calculation];

export class ScoreDisplayer<T extends CalculationType> extends Scene {
  private calculation: T;
  private x: number;
  private y: number;
  private cameraHeight: number;

  constructor() {
    super("ScoreDisplayer");
  }

  init(data: { calculation: T; x: number; y: number }) {
    this.calculation = data.calculation;
    this.x = data.x;
    this.y = data.y;
  }

  create() {
    this.cameraHeight = this.cameras.main.height;
    const scoreContainer = this.add.container(this.x, this.cameraHeight);
    const scores = [100, 200, 300]; // Example scores

    scores.forEach((score, index) => {
      const scoreText = this.add
        .text(
          this.x,
          index * 20 - scores.length * 10,
          `Player ${index + 1}: ${score}`,
          { font: "16px Arial", color: "#ffffff" }
        )
        .setOrigin(0, 0);
      scoreContainer.add(scoreText);
    });

    this.slideScores(scoreContainer);
    this.events.on("shutdown", () => this.hideScores(scoreContainer));
  }

  update() {}

  private slideScores(container: Phaser.GameObjects.Container) {
    this.tweens.add({
      targets: container,
      x: this.x,
      y: this.y,
      duration: 500,
      ease: "Power2",
    });
  }

  private hideScores(container: Phaser.GameObjects.Container) {
    this.tweens.add({
      targets: container,
      x: this.x,
      y: this.cameraHeight,
      duration: 500,
      ease: "Power2",
    });
  }
}
