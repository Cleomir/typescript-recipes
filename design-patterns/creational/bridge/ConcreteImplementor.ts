import IImplementor from "./interfaces/IImplementor";

export default class ConcreteImplementor implements IImplementor {
  public operation(): void {
    console.log("performing operation...");
  }
}
