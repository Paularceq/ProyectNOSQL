const mongoose = require('mongoose');

const ClientesSchema = new mongoose.Schema(
        {
            
            identificacion: {type: Number, required: true},
            nombre: {type: String, required: true},
            apellido: {type: String, required: true},
            correo_electronico: {type: String, required: true},
            telefono:  {type: Number, required: true},
            direccion: {type: String, required: true},
            fecha_registro: {type: Date, required: true}
        }
);

module.exports = mongoose.model('Clientes', ClientesSchema);