const express = require('express');
const { token } = require('../token/controller/token.controller');
const { boleto } = require('../boleto/controller/boleto.controller');
const {logErrror} = require('../logs/controller/error.log.controller');
const { getLogOk } = require('../logs/controller/ok.log.contoller');
const router = express.Router()


router.post('/token', token)
router.post('/boleto', boleto)
router.get('/log/error', logErrror)
router.get('/log/ok', getLogOk)


module.exports = router;