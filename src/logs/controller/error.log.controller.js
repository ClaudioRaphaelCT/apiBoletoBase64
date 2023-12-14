const { logsErrors } = require("../models/log.model");

exports.logErrror = (req, res) => {
  res.status(200).json(logsErrors);
};
