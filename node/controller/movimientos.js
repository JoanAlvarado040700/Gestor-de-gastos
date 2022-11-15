const conexion = require('../conexion')

const todos = (res)=> 
{

    const sql = 'select * from movimiento'
    
    conexion.query(sql, function (err, result) {
        if(err) {
            res.send('Ha ocurrido un error'+err)
        }else{
            res.send(result)
        }
    } )
};


const buscar = (req, _res)=>{
    const id = req.params.id
    const sql = 'selec * from movimiento where id=$(id)'

    conexion.query(sql, function(err,result){
        if(err) {
            res.send('Ha ocurrido un error'+err)
        }else{
            res.send(result)
        }
    })

}

const registrar = (req, res)=>{
    const sql = 'insert into movimiento set ?'
    conexion.query(sql, req.body, function(err){
        if (err){
            res.send('Ha ocurrido un error'+err)
        }else{
            res.send('Registro correcto')
        }
    })
}

const modificar = (req, res)=>{
    const id = req.params.id
    const campo = req.params.campo
    const nuevo_valor = req.body.nuevo_valor
    const sql = 'uopdate movimiento set ${campo}=${nuevo_valor} where id={id} '
    conexion.query(sql,function(err,){
        if (err){
            res.send('Ha ocurrido un error'+err)
        }else{
            res.send('se ha actualizado correctamente')
        }
    })
}

const eliminar = (req, res)=>{
    const id = req.params.id
    const sql = 'delete from movimiento where id=${id}'
    conexion.query(sql,function(err){
        if(err){
            res.send('Ha ocurrido un error al eliminar'+err)
        }else{
            res.send('Eliminado correctamente correctamente')
        }
    })
}

module.exports ={
    todos, buscar, registrar, modificar,eliminar
}