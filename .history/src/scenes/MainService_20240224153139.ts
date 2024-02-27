import {
  IResearchService,
  ResearchService,
} from "../services/research.service";

export default class MainService extends Phaser.Scene {
  private readonly _researchService: IResearchService;
  constructor() {
    super("MainService");
    this._researchService = new ResearchService();
  }

  public get researchService(): IResearchService {
    return this._researchService;
  }
}
