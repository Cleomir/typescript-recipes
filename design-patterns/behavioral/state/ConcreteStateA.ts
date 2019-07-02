import Context from "./Context";
import IState from "./interfaces/IState";

export default class ConcreteStateA implements IState {
  constructor(private context: Context) {
    this.context = context;
  }

  public handle(): void {
    console.log("changing to state B");
    this.context.setState(this.context.getStateB());
  }
}
