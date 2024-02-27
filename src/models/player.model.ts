export interface ICalculation {
  capital: number;
  energy: number;
  environment: number;
  prosperity: number;
  environmentResearch: string;
  energyResearch: string;
}

export interface IPlayer extends ICalculation {
  id: string;
  name: string;
}

export class Player implements IPlayer {
  id: string;
  name: string;
  capital: number;
  energy: number;
  environmentResearch: string;
  energyResearch: string;
  prosperity: number;
  research: number;
  color: PlayerColor;

  constructor(id: string, name: string, color: PlayerColor) {
    this.id = id;
    this.name = name;
    this.capital = 0;
    this.energy = 0;
    this.environmentResearch = "1.1";
    this.energyResearch = "1.1";
    this.prosperity = 0;
    this.research = 0;
    this.color = color;
  }
  environment: number;
}

export enum PlayerColor {
  Blue = "blue",
  Green = "green",
  Red = "red",
  Yellow = "yellow",
}
