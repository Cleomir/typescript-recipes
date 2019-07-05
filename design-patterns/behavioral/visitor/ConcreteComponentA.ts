import IComponent from "./interfaces/IComponent";
import IVisitor from "./interfaces/IVisitor";

export default class ConcreteComponentA implements IComponent {
  public accept(visitor: IVisitor): void {
    visitor.visitConcreteComponentA(this);
  }

  public exclusiveMethodOfConcreteComponentA(): string {
    return "A";
  }
}
