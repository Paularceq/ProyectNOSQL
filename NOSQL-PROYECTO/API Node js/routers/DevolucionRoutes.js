const express = require('express');
const router = express.Router();
const Devolucion = require('../models/Devolucion');

router.get('/Devolucion', async (req, res) =>{
    try {
        const Devolucion = await Devolucion.find();
        res.send(Devolucion);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;