import IFlyBehavior from "./interfaces/IFlyBehavior";

export default class FlyWithWingsStrategy implements IFlyBehavior {
  public fly(): void {
    console.log("I'm flying");
  }
}
