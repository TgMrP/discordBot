const ping = require('./commands/ping');
const sum = require('./commands/sum');
const eightBall = require('./commands/8ball');
const kickUser = require('./commands/kick');
const role = require('./commands/role');
const knock = require('./commands/knock');
const joke = require('./commands/joke');

const guildID = process.env.GUILD_ID;
const channelID = process.env.CHANNEL_ID;

const commands = {
  ping,
  sum,
  role,
  knock,
  joke,
  '8ball': eightBall,
  'kick': kickUser
};

module.exports = async (msg) => {
  // msg.channel.id === channelID
  if (msg.guild.id === guildID) {
    const args = msg.content.split(/\s+/);
    if (args.length == 0 || args[0].charAt(0) !== (process.env.PREFIX || '!')) return;
    const command = args.shift().substr(1);
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};