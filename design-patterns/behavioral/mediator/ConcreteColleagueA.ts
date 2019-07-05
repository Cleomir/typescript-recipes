import Colleague from "./Colleague";

export default class ConcreteColleagueA extends Colleague {
  public executeActionA(): void {
    console.log("component A is executing action A");
    this.mediator.notify(this, "A");
  }

  public executeActionB(): void {
    console.log("component A is executing action B");
    this.mediator.notify(this, "B");
  }
}
