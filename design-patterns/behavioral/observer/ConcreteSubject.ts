import IObserver from "./interfaces/IObserver";
import ISubject from "./interfaces/ISubject";

export default class ConcreteSubject implements ISubject {
  constructor(private observers: IObserver[]) {
    this.observers = observers;
  }

  public registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }
  public removeObserver(observer: IObserver): void {
    const observerIndex: number = this.observers.indexOf(observer);

    if (observerIndex >= 0) {
      this.observers.splice(observerIndex, 1);
    }
  }
  public notifyObservers(): void {
    this.observers.forEach((observer) => observer.update("update"));
  }
}
