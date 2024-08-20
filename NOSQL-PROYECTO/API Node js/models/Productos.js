const mongoose = require('mongoose');

const ProductosSchema = new mongoose.Schema(
        {
            idProducto: {type: Number, required: true},
            nombre_producto: {type: String, required: true},
            categoria: {type: String, required: true},
            marca:  {type: String, required: true},
            precio: {type: Number, required: true},
            stock: {type: Number, required: true},
            descripcion: {type: String, required: true},
            nombre_proveedor: {type: String, required: true}
        }
);

module.exports = mongoose.model('Productos', ProductosSchema);