import Device from "./Device";
import ICommand from "./interfaces/ICommand";

export default class DeviceOnCommand implements ICommand {
  constructor(private device: Device) {
    this.device = device;
  }
  public execute(): void {
    this.device.on();
  }
  public undo(): void {
    this.device.off();
  }
}
