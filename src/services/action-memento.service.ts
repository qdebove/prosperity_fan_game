import { IActionPlayed } from "../models/game.model";
import { IPlayer } from "../models/player.model";
import { Caretaker, ICaretaker, Originator } from "../utils/Memento";

export interface IActionMemento {
  registerNewUser(player: IPlayer): void;
  addAction(action: IActionPlayed): void;
}

export class ActionMemento implements IActionMemento {
  private readonly _careTakersByPlayer: Map<string, ICaretaker<IActionPlayed>>;
  
  constructor() {
    this._careTakersByPlayer = new Map();
  }

  registerNewUser(player: IPlayer): void {
  if (!this._careTakersByPlayer.has(player.id)) {
      const newState: IActionPlayed = {
        actions: [],
        playerId: player.id
      };
      this._careTakersByPlayer.set(player.id, new Caretaker<IActionPlayed>(new Originator<IActionPlayed>(newState)));
    }
  }

  addAction(action: IActionPlayed): void {
    const careTaker = this._careTakersByPlayer.get(action.playerId);
    if (careTaker) {
      careTaker.saveData(action);
    }
  }
}
