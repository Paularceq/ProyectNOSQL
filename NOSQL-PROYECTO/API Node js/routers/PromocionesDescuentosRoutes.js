const express = require('express');
const router = express.Router();
const PromocionesDescuentos = require('../models/PromocionesDescuentos');

router.get('/PromocionesDescuentos', async (req, res) =>{
    try {
        const PromocionesDescuentos = await PromocionesDescuentos.find();
        res.send(PromocionesDescuentos);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;