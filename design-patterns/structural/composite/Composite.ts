import Component from "./Component";

export default class Composite extends Component {
  private components: Component[] = [];

  public add(component: Component) {
    this.components.push(component);
  }

  public remove(component: Component) {
    const componentIndex = this.components.indexOf(component);

    if (componentIndex >= 0) {
      this.components.splice(componentIndex, 1);
    }
  }

  public operation() {
    this.components.forEach((component) => {
      component.operation();
    });
  }

  public getChild(index: number): Component | undefined {
    return this.components[index];
  }
}
