import ConcreteProductA from "./ConcreteProductA";
import ConcreteProductB from "./ConcreteProductB";
import IProduct from "./interfaces/IProduct";

export default class ProductFactory {
  public createProduct(type: string): IProduct | undefined {
    let product: IProduct;

    if (type === "productA") {
      product = new ConcreteProductA();
    } else if (type === "productB") {
      product = new ConcreteProductB();
    }

    return product;
  }
}
