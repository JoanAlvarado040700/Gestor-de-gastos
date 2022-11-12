const conectar =  require('./conexion')
const express = require('express')
const movRouter = require('./router/movimientos')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/movimientos', movRouter)

app.listen(3000, ()=>{
    console.log('Aplicacion corriendo en el puerto 3000')
})
