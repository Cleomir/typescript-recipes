import amqp, { AmqpConnectionManager } from "amqp-connection-manager";

let connection: AmqpConnectionManager | undefined;

const getConnection = async (): Promise<AmqpConnectionManager> => {
  if (!connection) {
    connection = amqp.connect([`amqp://username:password@localhost`]);
  }

  return connection;
};

export default getConnection;
