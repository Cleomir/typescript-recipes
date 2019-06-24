import IFlyBehavior from "./interfaces/IFlyBehavior";

export default class FlyNoWayStrategy implements IFlyBehavior {
  public fly(): void {
    console.log("I can't fly");
  }
}
