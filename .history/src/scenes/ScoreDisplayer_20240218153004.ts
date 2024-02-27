import { Scene } from "phaser";
import { Calculation } from "../enums/calculation.enum";

export class ScoreDisplayer<T extends Calculation> extends Scene {
  private calculation: T;

  constructor() {
    super("ScoreDisplayer");
  }

  init(data: { calculation: T }) {
    this.calculation = data.calculation;
  }

  create() {
    const scoreContainer = this.add.container(
      this.cameras.main.centerX,
      this.game.config.height as number
    );
    const scores = [100, 200, 300]; // Example scores

    scores.forEach((score, index) => {
      const scoreText = this.add
        .text(
          0,
          index * 20 - scores.length * 10,
          `Player ${index + 1}: ${score}`,
          { font: "16px Arial", color: "#ffffff" }
        )
        .setOrigin(0.5, 0.5);
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
      y: this.cameras.main.centerY, // Slide to the center of the screen
      duration: 500,
      ease: "Power2",
    });
  }
}
