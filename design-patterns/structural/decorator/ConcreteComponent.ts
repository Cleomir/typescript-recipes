import Component from "./Component";

export default class ConcreteComponent extends Component {
  // override
  public someMethod(): number {
    return 10;
  }
}
