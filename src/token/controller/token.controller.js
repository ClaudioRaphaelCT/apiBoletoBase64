const { user, password } = require("../../secrets/secrets");
const { tokenOK, tokenNOK } = require("../model/token.model");
const { logsErrors, logsOk } = require("../../logs/models/log.model");

let idError = 0;
let idOk = 0;

exports.token = (req, res) => {
  // Requests
  const { usuario, senha } = req.body;
  // DATA
  const fullDate = new Date();
  const day =
    fullDate.getDay() > 10 ? "0" + fullDate.getDay() : fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  const hours = fullDate.getHours();
  const minutes =
    fullDate.getMinutes() < 10
      ? "0" + fullDate.getMinutes()
      : fullDate.getMinutes();
  const seconds =
    fullDate.getSeconds() < 10
      ? "0" + fullDate.getSeconds()
      : fullDate.getSeconds();
  // OK
  if (user.includes(usuario) && password.includes(senha)) {
    idOk++;
    const dataRequestOk = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    logsOk.push({
      id: idOk,
      logType: "Log para acessos permitidos",
      urlMessage: "/token , Token capturado com sucesso",
      dataAcess: dataRequestOk,
      status: 201,
      userAcess: usuario,
      message: tokenOK,
    });
    res.status(201).json(tokenOK);
    //NOK
  } else {
    idError++;
    const dataRequest = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    logsErrors.push({
      id: idError,
      logType: "Log para acessos negados",
      urlMessage: "/token , Não foi possivel capturar o token",
      dateError: dataRequest,
      status: 400,
      bodyRequest: req.body,
      message: tokenNOK,
    });
    res.status(400).json(tokenNOK);
  }
};
