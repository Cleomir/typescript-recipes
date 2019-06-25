import IObserver from "./interfaces/IObserver";

export default class ConcreteObserver implements IObserver {
  public update(data: any): void {
    console.log(data);
  }
}
