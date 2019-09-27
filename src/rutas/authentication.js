const express = require('express');
const router = express.Router();
const User = require('../links');
const user = new User();

//REGISTRAR USUARIO

//ENRUTADOR PARA PEDIR LOS DATOS de registro
router.get('/registro', (req,res)=>{
        res.render('auth/registro');
});

router.get('/principal', (req, res) => {
res.render('principal');
});  

//EQUIPOS DE COMPUTO
router.get('/equipos/computo', /*isLoggedIn ,*/ (req, res)=>{
        res.render('equipos/equipos');
});

router.get('/inicio', /*isLoggedIn ,*/ (req, res)=>{
        res.render('auth/inicio');
});

router.get('/logout', (req, res)=>{
        req.logOut();
        res.render('/inicio');
});


      router.get('/principal', /*isLoggedIn*/ (req, res) => {
        res.render('principal');
      });

//LOGIN
router.post('/inicio', (req, res, next)=>{
        user.login(req.body.noEmpleado, req.body.password, function(result){
                if(result){
                        console.log('Logueado hola' + result.username);
                }else{
                        console.log('Usuario y contrasena incorrectos');
                }
        });  


});

<<<<<<< HEAD
router.get('/equipos/accesorios', (req, res)=>{
        res.render('usuarios/info_usuario');
=======
<<<<<<< Updated upstream
router.get('/equipos/accesorios', /*isLoggedIn ,*/ (req, res)=>{
        res.render('equipos/accesorios');
>>>>>>> master
});
router.get('/equipos/impresoras', (req, res)=>{
        res.render('equipos/impresoras');
});
router.get('/index', /*isLoggedIn ,*/ (req, res)=>{
        res.render('index');
});


                router.get('/cuentas', (req, res)=>{
                res.render('usuarios/cuentas');
                });

router.get('/acerca', (req, res)=>{
   res.render('acerca');     
});

//REGISTRO
router.post('/registro', (req, res, next)=>{
        console.log(req.body);
});



module.exports = router;