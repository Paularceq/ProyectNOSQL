const mongoose = require('mongoose');

const CategoriasSchema = new mongoose.Schema(
        {
            idCategoria: {type: Number, required: true},
            nombre: {type: String, required: true},
            descripcion: {type: String, required: true}
        }
);

module.exports = mongoose.model('Categorias', CategoriasSchema);