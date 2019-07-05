import Abstraction from "./Abstraction";

export default class RefinedAbstraction extends Abstraction {
  public additionalOperation(): void {
    console.log("performing additional operation");
  }
}
