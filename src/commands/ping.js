module.exports = async (msg) => {
  const timeTaken = Date.now() - msg.createdTimestamp;
  await msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  console.log('Ping Pong! (sent)');
};