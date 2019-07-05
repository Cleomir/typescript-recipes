import Flyweight from "./Flyweight";

export default class FlyweightFactory {
  constructor(private flyweights: Map<string, Flyweight>) {
    this.flyweights = flyweights;
  }

  public getFlyweight(
    key: string,
    flyweight: Flyweight
  ): Flyweight | undefined {
    if (!this.flyweights.has(key)) {
      this.flyweights.set(key, flyweight);
      return this.flyweights.get(key);
    }

    return this.flyweights.get(key);
  }

  public listFlyweights(): IterableIterator<[string, Flyweight]> {
    return this.flyweights.entries();
  }
}
