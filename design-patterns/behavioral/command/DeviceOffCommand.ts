import Device from "./Device";
import ICommand from "./interfaces/ICommand";

export default class DeviceOffCommand implements ICommand {
  constructor(private device: Device) {
    this.device = device;
  }
  public execute(): void {
    this.device.off();
  }
  public undo(): void {
    this.device.on();
  }
}
