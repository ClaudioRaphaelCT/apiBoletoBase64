const jwt = require('jsonwebtoken')
const {secret} = require('../../secrets/secrets')
const token = jwt.sign({userId: 1}, secret, {expiresIn: 5000})

const tokenOK = {
    authentication: true,
    message: "Permissão bem sucedida!",
    token: token,
}

const tokenNOK = {
    authentication: false,
    message: "Usuario não tem permissão para acessar o sistema!",
  };
  
  
  module.exports = {tokenOK, tokenNOK, token}