import ConcreteStateA from "./ConcreteStateA";
import ConcreteStateB from "./ConcreteStateB";
import Context from "./Context";

const context: Context = new Context();
const concreteStateA = new ConcreteStateA(context);
const concreteStateB = new ConcreteStateB(context);

context.request();
concreteStateB.handle();
concreteStateA.handle();
