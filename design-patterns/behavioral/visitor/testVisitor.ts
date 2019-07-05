import ConcreteComponentA from "./ConcreteComponentA";
import ConcreteComponentB from "./ConcreteComponentB";
import ConcreteVisitorA from "./ConcreteVisitorA";
import ConcreteVisitorB from "./ConcreteVisitorB";
import IComponent from "./interfaces/IComponent";
import IVisitor from "./interfaces/IVisitor";

const client = (components: IComponent[], visitor: IVisitor) => {
  components.forEach((component) => {
    component.accept(visitor);
  });
};

const concreteComponents = [new ConcreteComponentA(), new ConcreteComponentB()];

const visitorA = new ConcreteVisitorA();
client(concreteComponents, visitorA);

const visitorB = new ConcreteVisitorB();
client(concreteComponents, visitorB);
