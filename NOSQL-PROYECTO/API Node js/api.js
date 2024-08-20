const express = require('express');
const app = express();
const port = 3001;
const url = 'http://localhost';

app.get('/', (req, res) => {
    res.send('Respuesta del get desde express')
})

app.get('/servicios', (req, res) => {
    res.send('Respuesta de servicios')
})

app.get('/test', (req, res) => {
    res.send('Respuesta de is alive')
})

app.listen(port,()=>{
    console.log(`Puerto de servicio ${url}:${port}`, port)
})