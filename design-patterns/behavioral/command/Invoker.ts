import ICommand from "./interfaces/ICommand";

export default class Invoker {
  public undoCommand: ICommand;
  constructor(private onCommands: ICommand[], private offCommands: ICommand[]) {
    this.onCommands = onCommands;
    this.offCommands = offCommands;
  }

  public setCommand(onCommand: ICommand, offCommand: ICommand): void {
    this.onCommands.push(onCommand);
    this.offCommands.push(offCommand);
  }

  public onCommandFired(index: number): void {
    this.onCommands[index].execute();
    this.undoCommand = this.onCommands[index];
  }

  public offCommandFired(index: number): void {
    this.offCommands[index].execute();
    this.undoCommand = this.offCommands[index];
  }

  public undoCommandFired(): void {
    this.undoCommand.execute();
  }
}
