const conexion =require('.conexion')

const buscar = (req, _res)=>{
    const id = req.params.id
    const sql = 'selec * from movimiento where id=$(id)'

    conexion.query(sql (err,result))

}