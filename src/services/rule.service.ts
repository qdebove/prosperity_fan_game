import { IPlayer } from "../models/player.model";

export interface IRulesService {
    getNumberOfActions(): number;
    getRemainingActions(player: IPlayer): number;
}

export class RulesService implements IRulesService {
    getNumberOfActions(): number {
        return 2;
    }

    getRemainingActions(player: IPlayer): number {
        
    }
}
