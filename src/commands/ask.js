module.exports = async (msg, args) => {
  if (!args[1]) {
    msg.reply("Please ask a question `+!ask your_question`");
  } else {
    let replies = [
      'Yes.',
      'Yes.',
      'No.',
      'Perhaps you should consider it.',
      'Probably.',
      'Indeed',
      'Just get over with it.',
      'Maybe, maybe not. Maybe go fuck yourself.',
      'When the sun rises north, and when the pigs fly, then thou shalt find what you seek.'
    ];

    let botreply = replies[Math.floor(Math.random() * replies.length)];
    msg.reply(botreply);
  }
};