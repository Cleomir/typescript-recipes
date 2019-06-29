import AbstractTemplate from "./AbstractTemplate";

export default class ConcreteTemplateA extends AbstractTemplate {
  public operation1() {
    console.log("extended operation 1 template A");
  }
  public operation2() {
    console.log("extended operation 2 template A");
  }
}
