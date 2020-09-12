module.exports = async (msg, args) => {
  const deleteCount = parseInt(args[1], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 100)
    return msg.reply("Please provide a number between 1 and 100 for the number of messages to delete");

  const fetched = await msg.channel.fetchMessages({
    limit: deleteCount
  });
  msg.channel.bulkDelete(fetched).catch(error => msg.reply(`Couldn't delete messages because of: ${error}`));
  msg.channel.send(`PURGE! PURGE! PURGE! ${deleteCount} messages have been slaughtered :)`);
};