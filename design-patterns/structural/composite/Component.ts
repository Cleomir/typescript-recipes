export default abstract class Component {
  public add(component: Component) {
    throw new Error("Method not implemented.");
  }
  public remove(component: Component) {
    throw new Error("Method not implemented.");
  }
  public operation() {
    throw new Error("Method not implemented.");
  }
  public getChild(index: number) {
    throw new Error("Method not implemented.");
  }
}
