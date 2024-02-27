// Memento class
class Memento<T> {
  private state: T;

  constructor(state: T) {
    this.state = state;
  }

  public getState(): T {
    return this.state;
  }
}

// Originator class
class Originator<T> {
  private state: T;

  constructor(state: T) {
    this.state = state;
  }

  public setState(state: T): void {
    console.log(`Originator: Setting state to ${JSON.stringify(state)}`);
    this.state = state;
  }

  public save(): Memento<T> {
    console.log("Originator: Saving to Memento.");
    return new Memento(this.state);
  }

  public restore(memento: Memento<T>): void {
    this.state = memento.getState();
    console.log(
      `Originator: State after restoring from Memento: ${JSON.stringify(
        this.state
      )}`
    );
  }
}

// Caretaker class
class Caretaker<T> {
  private mementos: Memento<T>[] = [];

  constructor(private originator: Originator<T>) {}

  public backup(): void {
    console.log("\nCaretaker: Saving Originator's state...");
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }
    const memento = this.mementos.pop();
    console.log(
      "Caretaker: Restoring state to:",
      JSON.stringify(memento?.getState())
    );
    this.originator.restore(memento!);
  }
}
