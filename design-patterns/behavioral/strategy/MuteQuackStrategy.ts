import IQuackBehavior from "./interfaces/IQuackBehavior";

export default class MuteQuackBehavior implements IQuackBehavior {
  public quack(): void {
    console.log("silence ");
  }
}
