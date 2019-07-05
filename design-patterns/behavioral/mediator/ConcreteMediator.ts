import ConcreteColleagueA from "./ConcreteColleagueA";
import ConcreteColleagueB from "./ConcreteColleagueB";
import IMediator from "./interfaces/IMediator";

export default class ConcreteMediator implements IMediator {
  constructor(
    private colleagueA: ConcreteColleagueA,
    private colleagueB: ConcreteColleagueB
  ) {
    this.colleagueA = colleagueA;
    this.colleagueA.setMediator(this);
    this.colleagueB = colleagueB;
    this.colleagueB.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (event === "A") {
      console.log(`Mediator reacted to event ${event}`);
      this.colleagueB.executeActionC();
    }

    if (event === "B") {
      console.log(`Mediator reacted to event ${event}`);
      this.colleagueA.executeActionA();
    }
  }
}
