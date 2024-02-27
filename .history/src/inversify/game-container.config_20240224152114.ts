import { Container } from "inversify";
import {
  /*IResearchService,*/
  ResearchService,
} from "../services/research.service";

const gameContainer = new Container();
gameContainer
  .bind<ResearchService>("IResearchService")
  .to(ResearchService)
  .inSingletonScope();

export default gameContainer;
