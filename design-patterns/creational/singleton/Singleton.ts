export default class Singleton {
  public static getInstance(): Singleton {
    if (this.uniqueInstance === undefined) {
      this.uniqueInstance = new Singleton();
    }

    return this.uniqueInstance;
  }
  private static uniqueInstance: Singleton;

  private constructor() {}
}
