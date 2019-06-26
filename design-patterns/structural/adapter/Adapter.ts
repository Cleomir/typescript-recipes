import Adaptee from "./Adaptee";
import ITarget from "./interfaces/ITarget";

export default class Adapter implements ITarget {
  constructor(private adaptee: Adaptee) {
    this.adaptee = adaptee;
  }
  public request(): void {
    this.adaptee.specificRequest();
  }
}
