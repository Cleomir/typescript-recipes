export default class Flyweight {
  constructor(private sharedState: any) {
    this.sharedState = sharedState;
  }

  public operation(): void {
    console.log(`logging shared state: ${this.sharedState}`);
  }
}
