const got = require('got');
module.exports = async (msg) => {
  got('https://insult.mattbas.org/api/en/insult.json').then(response => {
    let content = JSON.parse(response.body);
    const insult = content.insult;
    msg.channel.send(insult)
      .then(sent => console.log(`Sent a reply to ${sent.author.username}`));
  }).catch(console.error);
};