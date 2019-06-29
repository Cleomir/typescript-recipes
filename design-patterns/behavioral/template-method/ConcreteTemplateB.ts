import AbstractTemplate from "./AbstractTemplate";

export default class ConcreteTemplateB extends AbstractTemplate {
  public operation1() {
    console.log("extended operation 1 template B");
  }
  public operation2() {
    console.log("extended operation 2 template B");
  }
}
