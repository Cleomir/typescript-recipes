import ConcreteColleagueA from "./ConcreteColleagueA";
import ConcreteColleagueB from "./ConcreteColleagueB";
import ConcreteMediator from "./ConcreteMediator";

const colleagueA = new ConcreteColleagueA();
const colleagueB = new ConcreteColleagueB();
const mediator = new ConcreteMediator(colleagueA, colleagueB);
colleagueA.setMediator(mediator);
colleagueB.setMediator(mediator);

colleagueA.executeActionA();
colleagueB.executeActionA();
