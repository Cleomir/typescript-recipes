import amqplib, { Connection, Channel } from "amqplib";

const sendMessage = async () => {
  const queue = "hello";
  const message = "hello world";

  try {
    const connection: Connection = await amqplib.connect(
      "amqp://admin:admin@localhost" // username:password@host
    );
    const channel: Channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });

    channel.sendToQueue(queue, Buffer.from(message), { persistent: true });
    console.log(`Message: ${message} sent`);
  } catch (error) {
    console.log(error);
  }
};

sendMessage();
