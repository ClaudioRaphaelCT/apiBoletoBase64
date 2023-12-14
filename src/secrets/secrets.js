const port = process.env.PORT;
const secret = process.env.SECRET;
const user = [process.env.USER];
const password = [process.env.PASSWORD];

module.exports = { port, user, password, secret };
