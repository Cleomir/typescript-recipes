import IMemento from "./interfaces/IMemento";
import Originator from "./Originator";

export default class CareTaker {
  private mementos: IMemento[] = [];

  constructor(private originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    console.log(`Saving Originator state...`);
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (this.mementos.length <= 0) {
      return;
    }
    const memento = this.mementos.pop();
    console.log(`Restoring state to ${memento!.getName()}`);
    this.originator.restore(memento!);
  }

  public showHistory(): void {
    console.log(`Listing all mementos`);
    this.mementos.forEach((memento) => {
      console.log(memento.getName());
    });
  }
}
