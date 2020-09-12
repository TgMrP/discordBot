const Discord = require("discord.js");
require("dotenv").config();

const commandHandler = require("./commandHandler");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("🤖 Beep beep! I am ready!");
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.find(channel => channel.name === "welcome");

  if (!channel) return;
  const role = member.guild.roles.find(r => r.name === "Members");
  if (!role) return;
  member.addRole(role, 'Welcome User');
  channel.send(`Welcome to our server, ${member}, please read the rules in the rules channel!`);
});

client.on("message", commandHandler);

client.login(process.env.BOT_TOKEN);