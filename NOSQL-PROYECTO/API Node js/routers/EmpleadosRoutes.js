const express = require('express');
const router = express.Router();
const Empleados = require('../models/Empleados');

router.get('/Empleados', async (req, res) =>{
    try {
        const Empleados = await Empleados.find();
        res.send(Empleados);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;