export interface IResearchService {
  getLevel(value: string): number;
  getSubLevel(value: string): number;
}

export class ResearchService implements IResearchService {
  getLevel(value: string): number {
    return parseInt(value.split(".")[0]);
  }

  getSubLevel(value: string): number {
    return parseInt(value.split(".")[1]);
  }
}
