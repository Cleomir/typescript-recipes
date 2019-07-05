import IHandler from "./interfaces/IHandler";

export default class Client {
  constructor(private handler: IHandler) {
    this.handler = handler;
  }

  public processRequests(requests: string[]): void {
    requests.forEach((request) => {
      const result = this.handler.handle(request);
      if (result) {
        console.log(result);
      }
    });
  }
}
