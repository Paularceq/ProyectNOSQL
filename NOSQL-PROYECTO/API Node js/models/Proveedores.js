const mongoose = require('mongoose');

const ProveedoresSchema = new mongoose.Schema(
        {
            dProvedor: {type: Number, required: true},
            nombre: {type: String, required: true},
            contacto: {type: String, required: true},
            correo_electronico:  {type: String, required: true},
            telefono: {type: Number, required: true},
            direccion:  {type: String, required: true}
        }
);

module.exports = mongoose.model('Proveedores', ProveedoresSchema);