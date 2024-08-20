const mongoose = require('mongoose');

const PagosSchema = new mongoose.Schema(
        {
            cliente_id: {type: Number, required: true},
            Orden_id: {type: Number, required: true},
            idPago: {type: Number, required: true},
            fecha_pago:  {type: Date, required: true},
            monto_pagado: {type: Number, required: true},
            id_metodopago: {type: Number, required: true},
            estado_pago: {type: Number, required: true}
        }
);

module.exports = mongoose.model('Pagos', PagosSchema);