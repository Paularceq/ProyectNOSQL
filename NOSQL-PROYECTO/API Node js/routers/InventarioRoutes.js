const express = require('express');
const router = express.Router();
const Inventario = require('../models/Inventario');

router.get('/Inventario', async (req, res) =>{
    try {
        const Inventario = await Inventario.find();
        res.send(Inventario);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;