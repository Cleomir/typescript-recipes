import amqplib, { Connection, Channel } from "amqplib";

const publishMessage = async () => {
  const exchange = "direct_messages";
  const routingKey = "important";
  const message = "this is an important message";

  try {
    const connection: Connection = await amqplib.connect(
      "amqp://admin:admin@localhost" // username:password@host
    );
    const channel: Channel = await connection.createChannel();
    await channel.assertExchange(exchange, "direct", { durable: false });

    channel.publish(exchange, routingKey, Buffer.from(message));
    console.log(`Message: ${message} sent to exchange ${exchange}`);
  } catch (error) {
    console.log(error);
  }
};

publishMessage();
