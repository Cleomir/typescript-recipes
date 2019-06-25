import ConcreteComponent from "./ConcreteComponent";
import ConcreteDecorator from "./ConcreteDecorator";
import Decorator from "./Decorator";

const decorator: Decorator = new ConcreteDecorator(new ConcreteComponent());

console.log(decorator.someMethod()); // output 30
