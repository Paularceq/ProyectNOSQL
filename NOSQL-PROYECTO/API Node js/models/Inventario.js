const mongoose = require('mongoose');

const InventarioSchema = new mongoose.Schema(
        {
            producto_id: {type: Number, required: true},
            provedor_id: {type: Number, required: true},
            id_inventario: {type: Number, required: true},
            cantidad_recibida:  {type: Number, required: true},
            fecha_recepcion: {type: Date, required: true}
        }
);

module.exports = mongoose.model('Inventario', InventarioSchema);