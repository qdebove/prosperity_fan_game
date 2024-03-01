import { IPlayer, PlayerColor } from "../models/player.model";
import { IPlayerService, PlayerService } from "./player.service";
import { IResearchService, ResearchService } from "./research.service";

export interface IGameManagerService {
    addPlayer(id: string, name: string, color: PlayerColor): void;
    getPlayers(): IPlayer[];
    getActivePlayer(): IPlayer;
    setActivePlayer(id: string): void;
    canPlay(): boolean;
}

export class GameManagerService implements IGameManagerService {
    private readonly _researchService: IResearchService;
    private readonly _playerService: IPlayerService;

    private _activePlayer: IPlayer | null = null;

    constructor() {
        this._researchService = new ResearchService();
        this._playerService = new PlayerService();
    }

    addPlayer(id: string, name: string, color: PlayerColor): void {
        this._playerService.addPlayer(id, name, color);
    }

    getPlayers(): IPlayer[] {
        return this._playerService.getPlayers();
    }

    getActivePlayer(): IPlayer {
        return this._activePlayer!;
    }

    setActivePlayer(id: string): void {
        this._activePlayer = this._playerService.getPlayerById(id);
    }

    canPlay(): boolean {
        return true;
    }
}