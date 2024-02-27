import { ICalculation, IPlayer, Player, PlayerColor } from "../models/player.model";

export interface IPlayerService {
  addPlayer(id: string, name: string, color: PlayerColor): void;
  getPlayers(): IPlayer[];
  updatePlayer(player: IPlayer, calculation: ICalculation): void;
}

export class PlayerService implements IPlayerService {
  private readonly _players: IPlayer[] = [];

  addPlayer(id: string, name: string, color: PlayerColor): void {
    const player: IPlayer = new Player(id, name, color);
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
}
