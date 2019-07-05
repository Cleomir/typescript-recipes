import IComponent from "./interfaces/IComponent";
import IVisitor from "./interfaces/IVisitor";

export default class ConcreteComponentB implements IComponent {
  public accept(visitor: IVisitor): void {
    visitor.visitConcreteComponentB(this);
  }

  public exclusiveMethodOfConcreteComponentB(): string {
    return "B";
  }
}
