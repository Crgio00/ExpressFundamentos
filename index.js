const express = require('express')
const app = express()
const port = process.env.PORT || 3600

//Middleboard(Funcion para tomar datos de un formulario)
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/employee.html')
})

app.post('/employee', (req, res)=>{
    res.send(req.body)
})

app.listen(port, ()=>{
    console.log(`Server in http://127.0.0.1:${port}`)
})
