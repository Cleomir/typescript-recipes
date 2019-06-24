import IFlyBehavior from "./interfaces/IFlyBehavior";
import IQuackBehavior from "./interfaces/IQuackBehavior";

abstract class Duck {
  private flyBehavior: IFlyBehavior;
  private quackBehavior: IQuackBehavior;

  constructor(flyBehavior: IFlyBehavior, quackBehavior: IQuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  public setFlyBehavior(flyBehavior: IFlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: IQuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }
}
