import Component from "./Component";

export default class Leaf extends Component {
  constructor(private name: string) {
    super();
    this.name = name;
  }
  public operation(): void {
    console.log(this.name);
  }
}
