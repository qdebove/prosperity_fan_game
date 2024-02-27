import { ICalculation, IPlayer } from "../models/player.model";

export interface IPlayerService {
  addPlayer(player: IPlayer): void;
  getPlayers(): IPlayer[];
  updatePlayer(player: IPlayer, calculation: ICalculation): void;
}

export class PlayerService implements IPlayerService {
  private readonly _players: IPlayer[] = [];

  addPlayer(player: IPlayer): void {
    this._players.push(player);
  }
  updatePlayer(player: IPlayer, calculation: ICalculation): void {
    player.capital = calculation.capital;
    player.energy = calculation.energy;
    player.environment = calculation.environment;
    player.prosperity = calculation.prosperity;
    player.research = calculation.research;
  }
  getPlayers(): IPlayer[] {
    return this._players;
  }
}
