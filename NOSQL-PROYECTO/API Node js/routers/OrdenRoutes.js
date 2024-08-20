const express = require('express');
const router = express.Router();
const Orden = require('../models/Orden');

router.get('/Orden', async (req, res) =>{
    try {
        const Orden = await Orden.find();
        res.send(Orden);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;