import { IPlayer, Player, PlayerColor } from "../models/player.model";
import { IPlayerService, PlayerService } from "./player.service";
import { IResearchService, ResearchService } from "./research.service";
import { IRulesService, RulesService } from "./rule.service";

export interface IGameManagerService {
    addPlayer(id: string, name: string, color: PlayerColor): void;
    getPlayers(): IPlayer[];
    getActivePlayer(): IPlayer;
    setActivePlayer(id: string): void;
    canPlay(player: IPlayer): boolean;
}

export class GameManagerService implements IGameManagerService {
    private readonly _playerService: IPlayerService;
    private readonly _researchService: IResearchService;
    private readonly _rulesService: IRulesService;

    private _activePlayer: IPlayer | null = null;

    constructor() {
        this._researchService = new ResearchService();
        this._playerService = new PlayerService();
        this._rulesService = new RulesService();
    }

    addPlayer(id: string, name: string, color: PlayerColor): void {
        const player: IPlayer = new Player(id, name, color);
        this._playerService.addPlayer(player);
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
    // TODO update
    canPlay(player: IPlayer): boolean {
        return this._activePlayer === player && this._rulesService.canPlayerPlay(player);
    }
}