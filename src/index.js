const Discord = require("discord.js");
require("dotenv").config();

const commandHandler = require("./commandHandler");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("🤖 Beep beep! I am ready!");
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
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