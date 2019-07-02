import ISubject from "./interfaces/ISubject";

export default class RealSubject implements ISubject {
  public request(): void {
    console.log("some operation on the real subject");
  }
}
