import ConcreteBuilder from "./ConcreteBuilder";
import Director from "./Director";

const builder = new ConcreteBuilder();
const director = new Director(builder);

director.construct();

const product = director.getProduct();

console.log(product.getName());
