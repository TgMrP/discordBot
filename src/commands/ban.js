module.exports = async (msg, args) => {
  if (!msg.guild.member(msg.author).hasPermission('BAN_MEMBERS')) {
    return msg.channel.send('You do not have the permission for ban users!');
  }
  if (msg.mentions.users.size === 0) {
    return msg.channel.send('You need to ping a user !');
  }
  let banMember = msg.guild.member(msg.mentions.users.first());
  if (!banMember) {
    return msg.channel.send('User not found!');
  }

  banMember.ban().then((member) => {
    msg.channel.send(member.displayName + " has left the server");
    msg.channel.send(member.displayName + " has been successfully banned by " + msg.author);
  });


};