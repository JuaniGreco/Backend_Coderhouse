const express = require('express');
const Contenedor = require('./Contenedor.js');

const app = express();
const productos = new Contenedor('./productos.json');
const PORT = 8080;

app.get('/', (req, res)=>{
    res.send('<h1 style="color: blue;">Bienvenidos al servidor express</h1> <h3>Para ver los productos, ingrese a la ruta /productos y para ver el producto aleatorio a la ruta /productoRandom</h2>');
});

app.get('/productos', async (req, res)=>{
    const prod = await productos.getAll();
    res.send(prod);
});

app.get('/productoRandom', async (req, res)=>{
    res.send(await (productos.getRandom()));
});

app.get('*', (req, res)=>{
    res.send('<h1 style="color: red;">404</h1>');
});

const server = app.listen(PORT, () => {
    console.log(`El servidor HTTP se esta escuchando correctamente en http://localhost:${PORT}/`);
});