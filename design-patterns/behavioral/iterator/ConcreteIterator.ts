import IIterator from "./interfaces/IIterator";

export default class ConcreteIteratorA implements IIterator {
  public items: string[];
  public position: number = 0;

  public hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] === undefined
    ) {
      return false;
    }

    return true;
  }
  public next() {
    const item = this.items[this.position];
    this.position++;

    return item;
  }
}
