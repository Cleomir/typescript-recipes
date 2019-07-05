import IMediator from "./interfaces/IMediator";

export default class Colleague {
  protected mediator!: IMediator;

  public setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }
}
