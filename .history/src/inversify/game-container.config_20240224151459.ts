import { Container } from "inversify";
import {
  IResearchService,
  ResearchService,
} from "../services/research.service";

const gameContainer = new Container();
gameContainer
  .bind<IResearchService>("IResearchService")
  .to(ResearchService)
  .inSingletonScope();

export default gameContainer;
