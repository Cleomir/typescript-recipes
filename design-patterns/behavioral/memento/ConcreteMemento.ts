import IMemento from "./interfaces/IMemento";

export default class ConcreteMemento implements IMemento {
  constructor(private state: string, private date: Date) {
    this.state = state;
    this.date = date;
  }

  public getState(): string {
    return this.state;
  }
  public getName(): string {
    return `${this.date.toUTCString()}-${this.state}`;
  }
  public getDate(): Date {
    return this.date;
  }
}
