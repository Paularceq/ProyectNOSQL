const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

const ClientesRoutes = require('./routers/ClientesRoutes');
const urlConexion = 'mongodb://localhost:27017/GameZone';
const url = 'http://localhost';

const app = express();
const port = 3002;

//Toda el app seria tipo json o se le conoce como serializar
app.use(bodyParse.json());

//Conexion de MongoDB
mongoose.connect(urlConexion,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).
    then(
        () => {
            console.log('Connect');
        }
    )
    .catch(err => 
        console.error("Error al conectar: ", err)

);

//Declaracion de rutas
app.use('/api', CategoriasRoutes);
app.use('/api', ClientesRoutes);
app.use('/api', DevolucionRoutes);
app.use('/api', EmpleadosRoutes);
app.use('/api', InventarioRoutes);
app.use('/api', OrdenRoutes);
app.use('/api', PagosRoutes);
app.use('/api', ProductosRoutes);
app.use('/api', PromocionesDescuentosRoutes);
app.use('/api', ProveedoresRoutes);

app.listen(port, () => {    
        console.log(`Puerto de servicio ${url}:${port}/api`, port);
});
