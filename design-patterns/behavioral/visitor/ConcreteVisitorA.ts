import ConcreteComponentA from "./ConcreteComponentA";
import ConcreteComponentB from "./ConcreteComponentB";
import IVisitor from "./interfaces/IVisitor";

export default class ConcreteVisitorA implements IVisitor {
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentA()} - Concrete visitor A`
    );
  }
  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentB()} - Concrete visitor A`
    );
  }
}
