export default interface IMemento {
  getState(): string;
  getName(): string;
  getDate(): Date;
}
