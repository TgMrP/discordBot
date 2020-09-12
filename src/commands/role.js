module.exports = async (msg, args) => {
  if (msg.mentions.users.size === 0) {
    return msg.channel.send('You need to ping a user !');
  }

  // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
  const member = msg.mentions.members.first();

  // or the person who made started the command: let member = message.member;

  //adds the role
  if (args[0] === "add") {
    const role = msg.guild.roles.find(r => r.name === args[1]);
    if (!role) {
      return msg.channel.send(`I can't find '${args[1]}' role!`);
    }
    member.addRole(role);
  }

  if (args[0] === "remove") {
    const role = msg.guild.roles.find(r => r.name === args[1]);
    if (!role) {
      return msg.channel.send(`I can't find '${args[1]}' role!`);
    }
    member.removeRole(role);
  }

};