import { Scene } from "phaser";
import { Calculation } from "../enums/calculation.enum";
import { Events } from "../enums/events.enum";

export class MainMenu extends Scene {
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
    this.events.on(Events.SWITCH_VIEW, (view: Calculation) => {
      switch (view) {
        case Calculation.Energy:
          this.scene.start("Energy");
          break;
        case Calculation.Environment:
          this.scene.start("Environment");
          break;
        case Calculation.Capital:
          this.scene.start("Capital");
          break;
        case Calculation.Research:
          this.scene.start("Research");
          break;
        case Calculation.Prosperity:
          this.scene.start("Prosperity");
          break;
      }
    });
  }
}
