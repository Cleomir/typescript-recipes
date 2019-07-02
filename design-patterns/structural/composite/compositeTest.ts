import Composite from "./Composite";
import Leaf from "./Leaf";

const componentA = new Composite();
const componentB = new Composite();
const componentC = new Composite();
const leafA = new Leaf("Leaf A");
const leafB = new Leaf("Leaf B");
const leafC = new Leaf("Leaf C");

componentA.add(leafA);
componentC.add(leafB);
componentB.add(componentC);

const composite = new Composite();
composite.add(componentA);
composite.add(componentB);
composite.add(leafC);

composite.operation();
