const express = require('express')
const route = express.Router()
const movConstroller = require('../controller/movimientos')

route.get('/todos', movConstroller.todos)
route.get('/buscar/:id', movConstroller.buscar)
route.get('/registrar', movConstroller.registro)
route.get('/modificar/:id', movConstroller.modificar)
route.get('/eliminar/:id',movConstroller.eliminar)

module.exports = router

