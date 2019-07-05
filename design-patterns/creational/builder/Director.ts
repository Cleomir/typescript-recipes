import ConcreteBuilder from "./ConcreteBuilder";
import Product from "./interfaces/Product";

export default class Director {
  constructor(private builder: ConcreteBuilder) {
    this.builder = builder;
  }
  public construct(): void {
    this.builder.buildPart();
  }

  public getProduct(): Product {
    return this.builder.getResult();
  }
}
