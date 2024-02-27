export interface IPlayer {
  id: string;
  name: string;
  capital: number;
  energy: number;
  environment: number;
  prosperity: number;
  research: number;
}

export class Player implements IPlayer {
  id: string;
  name: string;
  capital: number;
  energy: number;
  environment: number;
  prosperity: number;
  research: number;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.capital = 0;
    this.energy = 0;
    this.environment = 0;
    this.prosperity = 0;
    this.research = 0;
  }
}
