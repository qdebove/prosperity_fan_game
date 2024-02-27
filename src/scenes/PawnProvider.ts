import { Scene } from "phaser";

export default abstract class PawnProvider extends Scene {

    constructor(sceneKey: string) {
        super(sceneKey);
    }

    protected _getPawn(): Phaser.GameObjects.Shape {
        return this.add.rectangle(0, 0, 50, 50, 0xFF0000);
    }
}