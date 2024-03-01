import { Scene } from "phaser";
import { IPlayer } from "../models/player.model";

export default abstract class PawnProvider extends Scene {

    constructor(sceneKey: string) {
        super(sceneKey);
    }

    protected _generatePawn(player: IPlayer): Phaser.GameObjects.Shape {
        return this.add.rectangle(0, 0, 50, 50, player.color);
    }
}