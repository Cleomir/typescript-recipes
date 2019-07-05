import IImplementor from "./interfaces/IImplementor";

export default abstract class Abstraction {
  constructor(private implementor: IImplementor) {
    this.implementor = implementor;
  }

  public operation() {
    this.implementor.operation();
  }

  public abstract additionalOperation(): void;
}
