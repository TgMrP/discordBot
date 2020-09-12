const Discord = require('discord.js');
module.exports = async (msg) => {
  const timeTaken = Date.now() - msg.createdTimestamp;
  const embed = new Discord.RichEmbed();
  embed.setTitle(':information_source: BatimBot Status');
  embed.setDescription('Here\'s some info about me');
  embed.addField(':white_check_mark: API Status', `ONLINE & bot latency to this server is ${Math.round(timeTaken)}ms`);
  embed.addField(':spy:  My masters:', 'homeranil[https://github.com/homeranil] & rant1989[https://github.com/rant1989]');
  embed.addField(':purple_heart:  My Life', 'I\'m currently being hosted on a Heroku');
  embed.setColor('#00ff00');
  msg.channel.send(embed);
};