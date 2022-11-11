const mysql2 = require('mysql2')

conexion = mysql2.createConnection({
    host: 'localhost',
    user :'root',
    password :'',
    database : 'gastos'
})


conexion.connect((err, conn) => {

    if (err) {
        console.log('Ha ocurrido un error en la conexion'+err)

    }else {
        console.log('Conexion exitosa')
        return conn
    }

})

