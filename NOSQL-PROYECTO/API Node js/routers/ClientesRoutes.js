const express = require('express');
const router = express.Router();
const Clientes = require('../models/Clientes');

router.get('/Clientes', async (req, res) =>{
    try {
        const Clientes = await Clientes.find();
        res.send(Clientes);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;