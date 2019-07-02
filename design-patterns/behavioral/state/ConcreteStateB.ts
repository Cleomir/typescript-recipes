import Context from "./Context";
import IState from "./interfaces/IState";

export default class ConcreteStateB implements IState {
  constructor(private context: Context) {
    this.context = context;
  }

  public handle(): void {
    console.log("changing to state A");
    this.context.setState(this.context.getStateA());
  }
}
