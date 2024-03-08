import { Action } from "../enums/action.enum";
import { Turn } from "../enums/turn.enum";

export interface IActionPlayed {
  actions: Action[];
  turn: Turn;
}