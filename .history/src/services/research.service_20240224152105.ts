import { injectable } from "inversify";
import "reflect-metadata";

/*export interface IResearchService {
  getLevel(value: string): number;
  getSubLevel(value: string): number;
}*/

@injectable()
export class ResearchService /*implements IResearchService */ {
  getLevel(value: string): number {
    return parseInt(value.split(".")[0]);
  }

  getSubLevel(value: string): number {
    return parseInt(value.split(".")[1]);
  }
}
