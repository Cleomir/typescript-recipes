import IQuackBehavior from "./interfaces/IQuackBehavior";

export default class QuackStrategy implements IQuackBehavior {
  public quack(): void {
    console.log("Quack");
  }
}
