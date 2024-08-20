const mongoose = require('mongoose');

const DevolucionSchema = new mongoose.Schema(
        {
            cliente_id: {type: Number, required: true},
            Orden_id: {type: Number, required: true},
            idDevolucion: {type: Number, required: true},
            fecha_devolucion:  {type: Date, required: true},
            motivo_devolucion: {type: String, required: true},
            estado_devolucion: {type: String, required: true},
            metodo_reembolso: {type: String, required: true},
            cantidad_reembolsada: {type: Number, required: true}
        }
);

module.exports = mongoose.model('Devolucion', DevolucionSchema);