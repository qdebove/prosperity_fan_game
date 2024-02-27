import { IPlayerService, PlayerService } from "../services/player.service";
import {
  IResearchService,
  ResearchService,
} from "../services/research.service";

export default class MainService extends Phaser.Scene {
  private readonly _researchService: IResearchService;
  private readonly _playerService: IPlayerService;
  constructor() {
    super("MainService");
    this._researchService = new ResearchService();
    this._playerService = new PlayerService();
  }

  public get researchService(): IResearchService {
    return this._researchService;
  }

  public get playerService(): IPlayerService {
    return this._playerService;
  }
}
