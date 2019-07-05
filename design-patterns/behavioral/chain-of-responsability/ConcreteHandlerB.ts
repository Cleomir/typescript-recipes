import AbstractHandler from "./AbstractHandler";

export default class ConcreteHandlerB extends AbstractHandler {
  public handle(request: string): string | undefined {
    if (request === "ftp") {
      return "handling ftp request";
    }

    return super.handle(request);
  }
}
