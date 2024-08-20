const express = require('express');
const router = express.Router();
const Proveedores = require('../models/Proveedores');

router.get('/Proveedores', async (req, res) =>{
    try {
        const Proveedores = await Proveedores.find();
        res.send(Proveedores);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;