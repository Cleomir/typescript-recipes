import IProduct from "./interfaces/IProduct";
import ProductFactory from "./ProductFactory";

export default class ProductStore {
  constructor(private factory: ProductFactory) {
    this.factory = factory;
  }

  public orderProduct(type: string): IProduct {
    return this.factory.createProduct(type);
  }
}
