module.exports = async (msg, args) => {
  const numArgs = args.map(x => parseFloat(x));
  const sum = numArgs.reduce((counter, x) => counter += x);
  const message = `The sum of all the arguments you provided is ${sum}!`;
  msg.reply(message);
  console.log(message + ' (sent)');
};