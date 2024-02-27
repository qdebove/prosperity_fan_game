class Memento<T> {
  private state: T;

  constructor(state: T) {
    this.state = state;
  }

  public getState(): T {
    return this.state;
  }
}

class Originator<T> {
  private state: T;

  constructor(state: T) {
    this.state = state;
  }

  public setState(state: T): void {
    this.state = state;
  }

  public save(): Memento<T> {
    return new Memento(this.state);
  }

  public restore(memento: Memento<T>): void {
    this.state = memento.getState();
  }
}

class Caretaker<T> {
  private mementos: Memento<T>[] = [];

  constructor(private originator: Originator<T>) {}

  public backup(): void {
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (this.mementos.length > 0) {
      const memento = this.mementos.pop();
      this.originator.restore(memento!);
    }
  }
}
