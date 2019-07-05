import IPrototype from "./interfaces/IPrototype";

export default class ConcretePrototype implements IPrototype {
  constructor(private name: string, private hobbies: string[]) {
    this.name = name;
    this.hobbies = hobbies;
  }

  public clone(): object {
    const proto = Object.getPrototypeOf(this);
    const cloned = Object.create(proto);

    cloned.name = this.name;
    cloned.hobbies = [...this.hobbies];

    return cloned;
  }
}
