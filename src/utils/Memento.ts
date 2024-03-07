interface IMemento<T> {
  getState(): T;
}

class Memento<T> implements IMemento<T> {
  private state: T;

  constructor(state: T) {
    this.state = state;
  }

  public getState(): T {
    return this.state;
  }
}

export interface IOriginator<T> {
  setState(state: T): void;
  save(): IMemento<T>;
  restore(memento: IMemento<T>): void;
}

export class Originator<T> implements IOriginator<T> {
  private state: T;

  constructor(state: T) {
    this.state = state;
  }

  public setState(state: T): void {
    this.state = state;
  }

  public save(): IMemento<T> {
    return new Memento(this.state);
  }

  public restore(memento: IMemento<T>): void {
    this.state = memento.getState();
  }
}

export interface ICaretaker<T> {
  saveData(data: T): void;
  backup(): void;
  getMemento(index: number): IMemento<T>;
  undo(): void;
  deleteMemento(index: number): void;
}

export class Caretaker<T> implements ICaretaker<T> {
  private readonly mementos: IMemento<T>[] = [];

  constructor(private readonly originator: IOriginator<T>) {}

  public saveData(data: T): void {
    this.originator.setState(data);
    this.backup();
  }

  public backup(): void {
    this.mementos.push(this.originator.save());
  }

  public getMemento(index: number): IMemento<T> {
    return this.mementos[index];
  }

  public undo(): void {
    if (this.mementos.length > 0) {
      const memento = this.mementos.pop();
      this.originator.restore(memento!);
    }
  }

  public deleteMemento(index: number): void {
    this.mementos.splice(index, 1);
  }
}
