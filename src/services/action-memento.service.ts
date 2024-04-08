import { IActionPlayed } from "../models/game.model";
import { IPlayer } from "../models/player.model";
import { Caretaker, ICaretaker, Originator } from "../utils/Memento";

export interface IActionMementoService {
  registerNewUser(player: IPlayer): void;
  addAction(playerId: string, action: IActionPlayed): void;
}

export class ActionMementoService implements IActionMementoService {
  private readonly _careTakersByPlayer: Map<string, ICaretaker<IActionPlayed>>;
  
  constructor() {
    this._careTakersByPlayer = new Map();
  }

  registerNewUser(player: IPlayer): void {
  if (!this._careTakersByPlayer.has(player.id)) {
      this._careTakersByPlayer.set(player.id, new Caretaker<IActionPlayed>(new Originator<IActionPlayed>()));
    }
  }

  addAction(playerId: string, action: IActionPlayed): void {
    const careTaker = this._careTakersByPlayer.get(playerId);
    if (careTaker != null) {
      careTaker.saveData(action);
    }
  }
}
