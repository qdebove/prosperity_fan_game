export interface IResearchService {
  getLevel(value: string): number;
  getSubLevel(value: string): number;
  getNextLevels(value: string, remainingActions: number, max: string): string[];
}

export class ResearchService implements IResearchService {
  getLevel(value: string): number {
    return parseInt(value.split(".")[0]);
  }

  getSubLevel(value: string): number {
    return parseInt(value.split(".")[1]);
  }

  getNextLevels(value: string, remainingActions: number, max: string): string[] {
    const levels: string[] = [];
    let level: number = this.getLevel(value);
    let subLevel: number = this.getSubLevel(value);
    const maxLevel: number = this.getLevel(max);
    const maxSubLevel: number = this.getSubLevel(max);

    for (let i = 0; i < remainingActions; i++) {
      if(level < maxLevel) {
        if(subLevel < level + 1) {
          subLevel +=1;
          levels.push(`${level}.${subLevel}`);
        } else if (subLevel === level + 1) {
          level += 1;
          subLevel = 1;
          levels.push(`${level}.${subLevel}`);
        }
      } else if (level === maxLevel) {
        if(subLevel < maxSubLevel) {
          subLevel +=1;
          levels.push(`${level}.${subLevel}`);
        }
      }
    }

    return levels;
  }
}
