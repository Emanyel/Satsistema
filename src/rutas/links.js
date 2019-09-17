const express = require('express');
const router = express.Router();

const dbconexion = require('../database'); //PARA PODER HACER QUERYS
router.get('/usuarios', (req, res) => {
    res.render('usuarios/usuarios');
});

//PETICION PARA OBTENER TODOS LOS DATOS DEL USUARIO
//CREAMOS OTRA RUTA PARA EL FORMULARIO
router.post('/usuarios', async (req, res) =>{
    try {
        console.log(req.body);
        const {no_empleado} = req.body;
        const datos = {
            no_empleado,
        };

        await dbconexion.query('INSERT INTO usuarios set ?', [datos]);
        req.flash('success','Usuario agregado correctamente'); //('1','2') 1.nombre del mensaje, 2. contenido del mensaje
        res.redirect('/usuarios');
    } catch (error) {
        console.log(error);
    }
});

router.get('/', async(req, res) =>{
    const datos = await dbconexion.query('SELECT * FROM usuarios');
    res.render('usuarios/info_usuario', {datos});
});

//HACER PETICION PARA SABER SI SE DESEA CAMBIAR ALGUNA INFO DEL USUARIO



module.exports = router;