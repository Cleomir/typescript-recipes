import ConcretePrototype from "./ConcretePrototype";

const proto1 = new ConcretePrototype("cleomir", [
  "games",
  "technology",
  "stock markets"
]);
const cloned = proto1.clone();

console.log(proto1);
console.log(cloned);
console.log(Object.getPrototypeOf(proto1));
console.log(Object.getPrototypeOf(cloned));
