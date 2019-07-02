import ISubject from "./interfaces/ISubject";

export default class Proxy implements ISubject {
  constructor(private subject: ISubject) {
    this.subject = subject;
  }

  public request(): void {
    this.subject.request();
  }
}
