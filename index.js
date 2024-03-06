const express = require('express')
const app = express()
const port = process.env.PORT || 3600

//Middleboard(Funcion para tomar datos de un formulario)
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/employee.html')
})

app.get('/welcome/:fullName',(req, res)=>{
    const name = req.params.fullName
    res.send('Bienvenido '+ name)
})

app.post('/employee', (req, res)=>{
    const {idEmp, fullName} = req.body

    if (idEmp !="111" || fullName!="Juan") {
        res.redirect('/')
    } else {
        res.redirect(`/Welcome/${fullName}`)
    }
})

app.listen(port, ()=>{
    console.log(`Server in http://127.0.0.1:${port}`)
})
