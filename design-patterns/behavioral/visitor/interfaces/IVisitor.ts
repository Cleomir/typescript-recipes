import ConcreteComponentA from "../ConcreteComponentA";
import ConcreteComponentB from "../ConcreteComponentB";

export default interface IVisitor {
  visitConcreteComponentA(element: ConcreteComponentA): void;
  visitConcreteComponentB(element: ConcreteComponentB): void;
}
