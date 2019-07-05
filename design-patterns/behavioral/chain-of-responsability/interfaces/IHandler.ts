export default interface IHandler {
  setNextHandler(handler: IHandler): IHandler;
  handle(request: string): string | undefined;
}
