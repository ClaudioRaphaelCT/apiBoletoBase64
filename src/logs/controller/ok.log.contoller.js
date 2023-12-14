const { logsOk } = require("../models/log.model");

exports.getLogOk = (req, res) => {
  res.status(200).json(logsOk);
};
