import Abstraction from "./Abstraction";
import ConcreteImplementor from "./ConcreteImplementor";
import RefinedAbstraction from "./RefinedAbstraction";

const refinedAbstraction: Abstraction = new RefinedAbstraction(
  new ConcreteImplementor()
);

refinedAbstraction.operation();
refinedAbstraction.additionalOperation();
