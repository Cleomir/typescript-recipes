import IProduct from "./interfaces/IProduct";

export default class ConcreteProductB implements IProduct {
  public someMethod(): void {
    throw new Error("Method not implemented.");
  }
}
