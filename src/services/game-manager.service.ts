import { ResearchSide } from "../enums/research.enum";
import { IPlayer, Player, PlayerColor } from "../models/player.model";
import { ActionMementoService, IActionMementoService } from "./action-memento.service";
import { IPlayerService, PlayerService } from "./player.service";
import { IResearchService, ResearchService } from "./research.service";
import { IRulesService, RulesService } from "./rule.service";

export interface IGameManagerService {
    addPlayer(id: string, name: string, color: PlayerColor): void;
    getPlayers(): IPlayer[];
    getActivePlayer(): IPlayer;
    setActivePlayer(id: string): void;
    getPlayer(): IPlayer;
    setPlayer(id: string): void;
    canPlay(): boolean;

    getMaxSearchLevelAvailable(player: IPlayer, side: ResearchSide): string[];
}

export class GameManagerService implements IGameManagerService {
    private readonly _playerService: IPlayerService;
    private readonly _researchService: IResearchService;
    private readonly _rulesService: IRulesService;
    private readonly _actionMementoService: IActionMementoService;

    private _activePlayer: IPlayer | null = null;
    private _player: IPlayer | null = null;

    constructor() {
        this._researchService = new ResearchService();
        this._playerService = new PlayerService();
        this._rulesService = new RulesService();
        this._actionMementoService = new ActionMementoService();
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

    getPlayer(): IPlayer {
      return this._player!;
    }

    setPlayer(id: string): void {
      this._player = this._playerService.getPlayerById(id);
    }

    // TODO update
    canPlay(): boolean {
        if(this._player == null) {
          return false;
        }

        return this._rulesService.canPlayerPlay(this._player);
    }

    getMaxSearchLevelAvailable(player: IPlayer, side: ResearchSide): string[] {
        const remainingActions = player.remainingActions;

        return this._researchService.getNextLevels(side === ResearchSide.Energy ? player.energyResearch : player.environmentResearch, remainingActions, this._rulesService.getMaxResearchLevel());
    }
}