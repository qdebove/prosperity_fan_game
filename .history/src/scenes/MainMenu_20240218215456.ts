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
      const viewName = getViewFromCalculation(view);
      if (this._calculation !== null) {
        this._calculation.stop();
      }
      this._calculation = this.scene.launch(viewName);
    });
  }
}
