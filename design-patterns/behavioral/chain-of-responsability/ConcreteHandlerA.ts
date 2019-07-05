import AbstractHandler from "./AbstractHandler";

export default class ConcreteHandlerA extends AbstractHandler {
  public handle(request: string): string | undefined {
    if (request === "http") {
      return "handling http request";
    }

    return super.handle(request);
  }
}
