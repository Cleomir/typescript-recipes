import Component from "./Component";
import Decorator from "./Decorator";

export default class ConcreteDecorator extends Decorator {
  constructor(private component: Component) {
    super();
    this.component = component;
  }

  public someMethod(): number {
    return this.component.someMethod() + 20;
  }
}
