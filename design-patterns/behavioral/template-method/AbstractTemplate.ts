export default abstract class AbstractTemplate {
  public templateMethod(): void {
    this.operation1();
    this.operation2();
    this.concreteOperation();
  }

  public concreteOperation(): void {
    console.log("super concrete operation");
  }

  public abstract operation1(): void;
  public abstract operation2(): void;
}
