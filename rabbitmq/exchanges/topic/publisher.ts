import amqplib, { Connection, Channel } from "amqplib";

const publishMessage = async () => {
  const exchange = "topic_messages";
  const routingKey = "urgent.today";
  const message = "this is an urgent message";

  try {
    const connection: Connection = await amqplib.connect(
      "amqp://admin:admin@localhost" // username:password@host
    );
    const channel: Channel = await connection.createChannel();
    await channel.assertExchange(exchange, "topic", { durable: false });

    channel.publish(exchange, routingKey, Buffer.from(message));
    console.log(`Message: ${message} sent to exchange ${exchange}`);
  } catch (error) {
    console.log(error);
  }
};

publishMessage();
