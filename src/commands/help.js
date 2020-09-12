const Discord = require('discord.js');
const prefix = process.env.PREFIX || '!';
module.exports = async (msg) => {
  const embed = new Discord.RichEmbed();
  embed.setTitle(':robot: Things I can do :robot: ');
  embed.addField(':dart:  FUN STUFF', '--------------');
  embed.addField('Memes', `View a joke: ${prefix}meme`, true);
  embed.addField('Jokes', `View a joke: ${prefix}joke`, true);
  embed.addField('Amazeme', `Be amazed: ${prefix}amazeme`, true);
  embed.addField('Math sum', `calculate: ${prefix}sum [numbers]`, true);
  embed.addField(':tools: USEFUL STUFF', '--------------');
  embed.addField('Ping', `View latency to server: ${prefix}ping`, true);
  embed.addField('Bot Status', `View bot info: ${prefix}info`, true);
  embed.setColor('#2196f3');
  embed.setFooter('Note: This bot is a WIP. Expect frequent updates!');
  embed.setAuthor('BatimBot Commands Help');
  msg.channel.send(embed);
};