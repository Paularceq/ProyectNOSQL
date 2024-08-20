const mongoose = require('mongoose');

const PromocionesDescuentosSchema = new mongoose.Schema(
        {
            idPromo: {type: Number, required: true},
            nombre: {type: String, required: true},
            descripcion: {type: String, required: true},
            descuento:  {type: Number, required: true},
            fecha_inicio: {type: Date, required: true},
            fecha_fin: {type: Date, required: true}
        }
);

module.exports = mongoose.model('PromocionesDescuentos', PromocionesDescuentosSchema);
