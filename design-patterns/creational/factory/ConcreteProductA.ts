import IProduct from "./interfaces/IProduct";

export default class ConcreteProductA implements IProduct {
  public someMethod(): void {
    throw new Error("Method not implemented.");
  }
}
