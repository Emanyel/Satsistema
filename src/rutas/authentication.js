const express = require('express');
const router = express.Router();
const User = require('../login&register');
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

router.get('/equipos/accesorios',  (req, res)=>{
        res.render('equipos/accesorios');

});
router.get('/equipos/impresoras', (req, res)=>{
        res.render('equipos/impresoras');
});
router.get('/index',  (req, res)=>{
        res.render('index');
});

router.get('/cuentas', (req, res)=>{
        res.render('usuarios/cuentas');
});

router.get('/acerca', (req, res)=>{
        res.render('acerca');     
});


//LOGIN
router.post('/inicio', (req, res, next)=>{
        user.login(req.body.noEmpleado, req.body.password, function(result){
                if(result){
                        res.send('Logueado hola' + result.username);
                }else{
                      res.send('Usuario y contrasena incorrectos');
                }
        });  


});

//REGISTRO
router.post('/registro', (req, res, next)=>{
       let userInput = {
               noEmpleado: req.body.noEmpleado,
               password: req.body.password,
               password2: req.body.password2
       }
       if(userInput.password === userInput.password2){
        user.create(userInput, function(lastId){
                if(lastId){
                        res.send('Bienvenido' + userInput.noEmpleado);
 
                }else{
                        console.log('Error al crear usuario');
                }
        });
       }
       
});

module.exports = router;