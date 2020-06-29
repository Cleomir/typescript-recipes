import amqp, { Connection } from "amqplib";

export default class RabbitMQ {
  private static connection: Connection | undefined;

  public static async getConnection(): Promise<Connection | undefined> {
    try {
      if (!this.connection) {
        this.connection = await amqp.connect(
          `amqp://user:password@localhost:?heartbeat=60`
        );
      }

      this.connection.on("close", () => {
        setTimeout(this.getConnection, 1000);
      });

      return this.connection;
    } catch (error) {
      setTimeout(this.getConnection, 1000);
    }
  }
}
