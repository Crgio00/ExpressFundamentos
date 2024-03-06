//Crear constante que este direccionada al framework de express
//const express = require('express');
// Crear constante para la app que apunta al método express
//const app = express();

const cars = {platenumber:'12',brand:'Chevrolet'}

// Definir la const para el puerto
const port = process.env.PORT || 3300
// Definir las rutas o endPoint del servidor
app.get("/",(req, res)=>{
    //res.send(`Estamos en el inicio de la app BackEnd: /`)
    // Invocar el archivo cars.html
    res.sendFile("./views/cars.html",{root:__dirname})
})
// Método get para la ruta de cars
app.get("/cars",(req, res)=>{
    //res.send(`Estamos por método ${req.method}`)
    res.send(JSON.stringify(cars))
})
// Método que permite enviar parametros
app.get('/session/:user/:passw',(req, res)=>{
    // Desestructurar el objeto params
    const {user, passw} = req.params
    //res.send(`Los datos enviados son: ${req.params.user} y ${req.params.passw}`)
    res.send(`Los datos enviados son: ${user} y ${passw}`);
})
// Post
app.post("/",(req, res)=>{
    res.send(`Metodo ${req.method}`)
})

app.post("/cars",(req,res)=>{
    res.send("Estamos en método POST, ruta cars")
})
// Put
app.put("/",(req, res)=>{
    res.send(`Metodo ${req.method}`)
})

app.put("/cars",(req,res)=>{
    res.send("Estamos en método PUT, ruta cars")
})
// Delete
app.delete("/",(req, res)=>{
    res.send(`Metodo ${req.method}`)
})

app.delete("/cars",(req,res)=>{
    res.send("Estamos en método DELETE, ruta cars")
})

//subir el servidor
app.listen(port, ()=>{
    console.log(`El servidor está corriendo en http://localhost:${port}`)
})