import amqplib, { Connection, Channel } from "amqplib";

const receiveMessage = async () => {
  const queue = "hello";

  try {
    const connection: Connection = await amqplib.connect(
      "amqp://admin:admin@localhost" // username:password@host
    );
    const channel: Channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });
    await channel.prefetch(50);

    channel.consume(
      queue,
      (message) => {
        if (message !== null) {
          console.log(`Received message: ${message.content.toString()}`);
          channel.ack(message);
        }
      },
      { noAck: false }
    );
  } catch (error) {
    console.log(error);
  }
};

receiveMessage();
