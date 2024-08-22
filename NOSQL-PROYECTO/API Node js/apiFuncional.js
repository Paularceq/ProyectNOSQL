const express = require('express');
const connectDB = require('./conexionMongoDB');
const Categorias = require('./models/Categorias');
const Clientes = require('./models/Clientes');
const CategoriasRoutes = require ('./routers/CategoriasRoutes');
const ClientesRoutes = require ('./routers/ClientesRoutes');
const app = express();
const port = 3000;
 
// Conexión a la base de datos
connectDB();
 
// Convierte todo a JSON
app.use(express.json());
 
// Ruta base para verificar que el servidor está corriendo
app.get('/', (req, res) => {
    res.send("Estoy alive!!!");
});

app.use('/api', CategoriasRoutes);

app.use('/api', ClientesRoutes); 

app.get('/Clientes', async (req, res) =>{
    try {
        const Clientes = await Clientes.find();
        if (!Clientes){
            return res.status(404).json({ message: "Elemento no encontrado" });
        }
        res.json(Clientes);
    }
    catch (err) {
        res.status(500).send(err);
    }

});
 
// Ruta para obtener una categoría por ID
app.get('/Categorias/:id', async (req, res) => {
    try {
        const categoria = await Categorias.findOne({_id: req.params.id});
 
        if (!categoria) {
            return res.status(404).json({ message: "Elemento no encontrado" });
        }
 
        res.json(categoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
 
// Ruta para insertar una nueva categoría
app.post('/Categorias', async (req, res) => {
    try {
        const newCategoria = new Categorias(req.body);
        await newCategoria.save();
        res.status(201).json(newCategoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
 
// Ruta para actualizar una categoría por ID
app.put('/Categorias/:id', async (req, res) => {
    try {
        const categoriaActualizada = await Categorias.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
 
        if (!categoriaActualizada) {
            return res.status(404).json({ message: "Elemento no encontrado" });
        }
 
        res.json(categoriaActualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
 
// Ruta para eliminar una categoría por ID
app.delete('/Categorias/:id', async (req, res) => {
    try {
        const categoriaEliminada = await Categorias.findByIdAndDelete(req.params.id);
 
        if (!categoriaEliminada) {
            return res.status(404).json({ message: "Elemento no encontrado" });
        }
 
        res.json({ message: "Elemento eliminado" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
 
// Inicia el servidor
app.listen(port, () => {
    console.log(`API URL en http://localhost:${port}`);
});