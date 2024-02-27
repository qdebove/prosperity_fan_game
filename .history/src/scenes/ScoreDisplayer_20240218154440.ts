import { Scene } from "phaser";
import { Calculation } from "../enums/calculation.enum";

export class ScoreDisplayer<T extends Calculation> extends Scene {
  private calculation: T;
  private x: number;
  private y: number;

  constructor() {
    super("ScoreDisplayer");
  }

  init(data: { calculation: T; x: number; y: number }) {
    this.calculation = data.calculation;
    this.x = data.x;
    this.y = data.y;
  }

  create() {
    const scoreContainer = this.add.container(0, this.cameras.main.height);
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

    scoreContainer.x = this.cameras.main.centerX;

    this.slideScores(scoreContainer);
  }

  update() {
    // Your code for updating the score displayer goes here
  }

  private slideScores(container: Phaser.GameObjects.Container) {
    this.tweens.add({
      targets: container,
      x: this.x,
      y: this.y, // Slide to the center of the screen
      duration: 500,
      ease: "Power2",
    });
  }
}
