module.exports = async (msg, args) => {
  if (args.length === 0) return msg.reply('Please provide an ID');
  if (!msg.guild.member(msg.author).hasPermission('KICK_MEMBERS')) {
    return msg.channel.send('You do not have the permission for ban users"  !');
  }
  if (msg.mentions.users.size === 0) {
    return msg.channel.send('You need to ping a user !');
  }
  let kickMember = msg.guild.member(msg.mentions.users.first());
  if (!kickMember) {
    return msg.channel.send('User not found!');
  }

  kickMember.kick().then((member) => {
    msg.channel.send(member.displayName + " has left the server");
    msg.channel.send(member.displayName + " has been successfully kicked by " + msg.author);
  });


};