import {
  IResearchService,
  ResearchService,
} from "../services/research.service";

export default class MainService extends Phaser.Scene {
  private readonly _researchService: IResearchService;
  constructor() {
    super("MainController");
    this._researchService = new ResearchService();
  }

  public toto(): void {}
}
