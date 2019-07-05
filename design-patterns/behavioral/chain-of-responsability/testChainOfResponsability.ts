import Client from "./Client";
import ConcreteHandlerA from "./ConcreteHandlerA";
import ConcreteHandlerB from "./ConcreteHandlerB";
import IHandler from "./interfaces/IHandler";

const httpHandler: IHandler = new ConcreteHandlerA();
const ftpHandler: IHandler = new ConcreteHandlerB();

httpHandler.setNextHandler(ftpHandler);

const client = new Client(httpHandler);

client.processRequests(["http", "ftp"]);
