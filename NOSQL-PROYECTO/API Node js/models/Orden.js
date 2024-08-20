const mongoose = require('mongoose');

const OrdenSchema = new mongoose.Schema(
        {
            cliente_id: {type: Number, required: true},
            id_Orden: {type: Number, required: true},
            estado_orden: {type: String, required: true},
            total_orden: {type: Number, required: true},
            fecha_orden: {type: Date, required: true}
        }
);

module.exports = mongoose.model('Orden', OrdenSchema);