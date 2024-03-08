import { IPlayer } from "../models/player.model";

export interface IRulesService {
  getNumberOfActions(): number;
  canPlayerPlay(player: IPlayer): boolean;
  getMaxResearchLevel(): string;
}

export class RulesService implements IRulesService {
  getNumberOfActions(): number {
      return 2;
  }

  canPlayerPlay(player: IPlayer): boolean {
      return player.remainingActions > 0;
  }

  getMaxResearchLevel(): string {
      return "6.7";
  }
}
