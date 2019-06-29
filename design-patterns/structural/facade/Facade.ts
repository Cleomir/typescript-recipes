import ClassA from "./ClassA";
import ClassB from "./ClassB";
import ClassC from "./ClassC";

export default class Facade {
  constructor(
    private classA: ClassA,
    private classB: ClassB,
    private classC: ClassC
  ) {
    this.classA = classA;
    this.classB = classB;
    this.classC = classC;
  }

  public someFeature() {
    this.classA.fetchSomething();
    this.classB.processSomething();
    this.classC.outputSomething();
  }
}
