import crypto from "crypto";
import ConcreteMemento from "./ConcreteMemento";
import IMemento from "./interfaces/IMemento";

export default class Originator {
  constructor(private state: string) {
    this.state = state;
  }

  public operation(): void {
    this.state = crypto.randomBytes(16).toString("hex");
    console.log(`state has changed to ${this.state}`);
  }

  public save(): IMemento {
    return new ConcreteMemento(this.state, new Date());
  }

  public restore(memento: IMemento): void {
    this.state = memento.getState();
    console.log(`Originator state has changed to ${this.state}`);
  }
}
