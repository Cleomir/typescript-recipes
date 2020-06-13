import amqplib, { Connection, Channel } from "amqplib";

const subscribeToMessage = async () => {
  const exchange = "logs";

  try {
    const connection: Connection = await amqplib.connect(
      "amqp://admin:admin@localhost" // username:password@host
    );
    const channel: Channel = await connection.createChannel();

    await channel.assertExchange(exchange, "fanout", { durable: false });
    const queueName = await channel.assertQueue("", { exclusive: true });
    await channel.bindQueue(queueName.queue, exchange, "");
    await channel.consume(queueName.queue, (message) => {
      if (message !== null) {
        console.log(
          `Received message from exchange ${exchange} : ${message.content.toString()}`
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};

subscribeToMessage();
