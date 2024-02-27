import { IResearchService } from "../services/research.service";

export default class MainService extends Phaser.Scene {
  private readonly _researchService: IResearchService;
  constructor() {
    super("MainController");
  }

  create() {}
}
