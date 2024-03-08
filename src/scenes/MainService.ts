import { PlayerColor } from "../models/player.model";
import { GameManagerService, IGameManagerService } from "../services/game-manager.service";

// TODO use rules
export default class MainService extends Phaser.Scene {
  private readonly _gameManagerService: IGameManagerService;

  constructor() {
    super("MainService");
    this._gameManagerService = new GameManagerService();
  }

  preload() {
    this._gameManagerService.addPlayer("1", "Player 1", PlayerColor.Blue);
    this._gameManagerService.addPlayer("2", "Player 2", PlayerColor.Green);
    this._gameManagerService.addPlayer("3", "Player 3", PlayerColor.Red);
    this._gameManagerService.addPlayer("4", "Player 4", PlayerColor.Yellow);
    this._gameManagerService.setActivePlayer("1");
    this._gameManagerService.setPlayer("1");
  }

  public get gameManagerService(): IGameManagerService {
    return this._gameManagerService;
  }

}
