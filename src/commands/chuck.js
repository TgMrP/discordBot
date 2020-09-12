const got = require('got');
module.exports = async (msg) => {
  got('https://api.chucknorris.io/jokes/random').then(response => {
    let content = JSON.parse(response.body);
    msg.reply(content.value);
  }).catch(console.error);
};