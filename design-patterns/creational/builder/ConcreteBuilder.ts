import IBuilder from "./interfaces/IBuilder";
import Product from "./interfaces/Product";

export default class ConcreteBuilder implements IBuilder {
  public product: Product = new Product();

  public buildPart(): void {
    this.product.setName("test product");
  }

  public getResult(): Product {
    return this.product;
  }
}
