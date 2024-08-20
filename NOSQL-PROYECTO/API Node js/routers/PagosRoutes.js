const express = require('express');
const router = express.Router();
const Pagos = require('../models/Pagos');

router.get('/Pagos', async (req, res) =>{
    try {
        const Pagos = await Pagos.find();
        res.send(Pagos);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;