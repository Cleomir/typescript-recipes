import amqplib, { Connection, Channel } from "amqplib";

const subscribeToMessage = async () => {
  const exchange = "topic_messages";
  // const routingKey = "#";
  const routingKey = "*.today";

  try {
    const connection: Connection = await amqplib.connect(
      "amqp://admin:admin@localhost" // username:password@host
    );
    const channel: Channel = await connection.createChannel();

    await channel.assertExchange(exchange, "topic", { durable: false });
    const queueName = await channel.assertQueue("", { exclusive: true });
    await channel.bindQueue(queueName.queue, exchange, routingKey);
    await channel.consume(queueName.queue, (message) => {
      if (message !== null) {
        console.log(
          `Received message from direct exchange ${exchange} with routing key ${routingKey}: ${message.content.toString()}`
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};

subscribeToMessage();
