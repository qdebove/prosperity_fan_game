import { Scene } from "phaser";
import { Calculation, getViewFromCalculation } from "../enums/calculation.enum";

export class MainMenu extends Scene {
  private _calculation: Phaser.Scenes.ScenePlugin | null = null;
  constructor() {
    super("MainMenu");
  }

  create() {
    const image = this.add.image(0, 0, "main-menu-background").setOrigin(0);
    image.displayWidth = this.cameras.main.width;
    image.displayHeight = this.cameras.main.height;
    this._registerEvents();

    this.scene.launch("BottomBar");
  }

  private _registerEvents() {
    this.scene.get("BottomBar").events.on("toto", (view: Calculation) => {
      console.log(view);
      if (
        this._calculation !== null &&
        this.scene.isActive(getViewFromCalculation(view))
      ) {
        console.log("stop");
        this._calculation.stop();
      }
      switch (view) {
        case Calculation.Energy:
          this._calculation = this.scene.launch("Energy");
          break;
        case Calculation.Environment:
          this._calculation = this.scene.launch("Environment");
          break;
        case Calculation.Capital:
          this._calculation = this.scene.launch("Capital");
          break;
        case Calculation.Research:
          this._calculation = this.scene.launch("Research");
          break;
        case Calculation.Prosperity:
          this._calculation = this.scene.launch("Prosperity");
          break;
      }
    });
  }
}
