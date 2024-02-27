import { Container } from "inversify";
import { ResearchService } from "../services/research.service";

const gameContainer = new Container();
gameContainer
  .bind<ResearchService>("IResearchService")
  .to(ResearchService)
  .inSingletonScope();

export default gameContainer;
