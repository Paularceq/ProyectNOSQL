const express = require('express');
const router = express.Router();
const Productos = require('../models/Productos');

router.get('/Productos', async (req, res) =>{
    try {
        const Productos = await Productos.find();
        res.send(Productos);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;