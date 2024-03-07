import { Action } from "../enums/action.enum";

export interface IActionPlayed {
    playerId: string;
    actions: Action[]
}