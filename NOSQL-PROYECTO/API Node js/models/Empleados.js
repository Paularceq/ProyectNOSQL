const mongoose = require('mongoose');

const EmpleadosSchema = new mongoose.Schema(
        {
            idEmpleado: {type: Number, required: true},
            nombre: {type: String, required: true},
            apellido: {type: String, required: true},
            cargo:  {type: String, required: true},
            correo_electronico: {type: String, required: true},
            telefono: {type: Number, required: true},
            fecha_contratacion: {type: Date, required: true}
        }
);

module.exports = mongoose.model('Empleados', EmpleadosSchema);