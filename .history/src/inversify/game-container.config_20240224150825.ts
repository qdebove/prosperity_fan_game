import { Container } from "inversify";
import {
  IResearchService,
  ResearchService,
} from "../services/research.service";

const container = new Container();
container
  .bind<IResearchService>("IResearchService")
  .to(ResearchService)
  .inSingletonScope();

export default container;
