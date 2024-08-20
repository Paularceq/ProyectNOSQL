const express = require('express');
const router = express.Router();
const Categorias = require('../models/Categorias');

router.get('/Categorias', async (req, res) =>{
    try {
        const Categorias = await Categorias.find();
        res.send(Categorias);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;