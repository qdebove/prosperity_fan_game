export interface ICalculation {
  capital: number;
  energy: number;
  environment: number;
  prosperity: number;
  research: number;
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
  environment: number;
  prosperity: number;
  research: number;
  color: PlayerColor;

  constructor(id: string, name: string, color: PlayerColor) {
    this.id = id;
    this.name = name;
    this.capital = 0;
    this.energy = 0;
    this.environment = 0;
    this.prosperity = 0;
    this.research = 0;
    this.color = color;
  }
}

export enum PlayerColor {
  Blue = "blue",
  Green = "green",
  Red = "red",
  Yellow = "yellow",
}
