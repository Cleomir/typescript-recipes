import amqplib, { Connection, Channel } from "amqplib";

const publishMessage = async () => {
  const exchange = "logs";
  const message = "hello exchange";

  try {
    const connection: Connection = await amqplib.connect(
      "amqp://admin:admin@localhost" // username:password@host
    );
    const channel: Channel = await connection.createChannel();
    await channel.assertExchange(exchange, "fanout", { durable: false });

    channel.publish(exchange, "", Buffer.from(message));
    console.log(`Message: ${message} sent to exchange ${exchange}`);
  } catch (error) {
    console.log(error);
  }
};

publishMessage();
