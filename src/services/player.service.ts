import { ICalculation, IPlayer } from "../models/player.model";

export interface IPlayerService {
  addPlayer(player: IPlayer): void;
  getPlayers(): IPlayer[];
  updatePlayer(player: IPlayer, calculation: ICalculation): void;
  getPlayerById(id: string): IPlayer | null;
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
    player.environmentResearch = calculation.environmentResearch;
    player.energyResearch = calculation.energyResearch;
  }
  getPlayers(): IPlayer[] {
    return this._players;
  }

  getPlayerById(id: string): IPlayer | null {
    return this._players.find((player) => player.id === id) || null;
  }
}
