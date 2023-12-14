const {token} = require('../../token/model/token.model');
const { boletoOk, boletoNOK } = require('../model/boleto.model');

exports.boleto = (req, res) => {
    const authorization = req.headers['authorization'];

    if(authorization === token){
        res.status(201).json(boletoOk)
    }
    res.status(400).json(boletoNOK)
}