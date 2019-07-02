import ConcreteStateA from "./ConcreteStateA";
import ConcreteStateB from "./ConcreteStateB";
import IState from "./interfaces/IState";

export default class Context {
  private stateA: IState;
  private stateB: IState;
  private currentState: IState;

  constructor() {
    this.stateA = new ConcreteStateA(this);
    this.stateB = new ConcreteStateB(this);
    this.currentState = this.stateA;
  }

  public request(): void {
    this.currentState.handle();
  }

  public setState(state: IState) {
    this.currentState = state;
  }

  public getStateA(): IState {
    return this.stateA;
  }

  public getStateB(): IState {
    return this.stateB;
  }
}
