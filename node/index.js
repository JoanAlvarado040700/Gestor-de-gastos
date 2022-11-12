const conectar =  require('./conexion')
const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.listen(3000, ()=>{
    console.log('Aplicacion corriendo en el puerto 3000')
})
