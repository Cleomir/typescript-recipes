import IHandler from "./interfaces/IHandler";

export default abstract class AbstractHandler implements IHandler {
  private nextHandler!: IHandler;

  public setNextHandler(handler: IHandler): IHandler {
    this.nextHandler = handler;

    return handler;
  }

  public handle(request: string): string | undefined {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
  }
}
