const express = require('express');
const router = express.Router();
const User = require('../login&register');
const user = new User();

//REGISTRAR USUARIO

//ENRUTADOR PARA PEDIR LOS DATOS DE REGISTRO
router.get('/registro', (req,res)=>{
        res.render('auth/registro');
});

router.get('/principal', (req, res) => {
        res.render('principal');
});  

//EQUIPOS DE COMPUTO
router.get('/equipos/computo', (req, res)=>{
        res.render('equipos/equipos');
});

router.get('/inicio', (req, res)=>{
        res.render('auth/inicio');
});

router.get('/logout', (req, res, next)=>{
        //SI EXISTE ALGUNA SESION
        if(req.session.user){
                //DESHACES LA SESION Y VUELVES AL INICIO
                req.session.destroy(function(){
                        res.render('auth/inicio');
                });
        }
});

router.get('/principal',  (req, res) => {
       let user = req.session.user;
       if(user){
               res.render('principal', {opp: req.session.opp, noEmpleado: user.noEmpleado});
               return;
       }
       res.redirect('/index');
});

router.get('/equipos/accesorios',  (req, res)=>{
        res.render('equipos/accesorios');

});
router.get('/equipos/impresoras', (req, res)=>{
        res.render('equipos/impresoras');
});
router.get('/index',  (req, res)=>{
        let user = req.session.user;
        //SI EXISTE UNA SESIONLLAMADA USUARIO SIGNIFICA QUE ESTA LOGEADO LO DIRECCIONAMOS A LA PANTALLA PRINCIPAL
        if(user){
                res.redirect('/principal');
                return;
        }
        //SI NO LO LELVAMOS AL INDEX
        res.render('index');
});

router.get('/cuentas', (req, res)=>{
        res.render('usuarios/cuentas');
});

router.get('/acerca', (req, res)=>{
        res.render('acerca');     
});
router.get('/pases/pases', (req, res)=>{
        res.render('pases/pases');
});

router.post('/equipos/computo', (req, res)=>{
        console.log(req.body);
        
});

//LOGIN
router.post('/inicio', (req, res, next)=>{
        //LLAMAMOS LA FUNCION LOGIN Y NOS REGRESARA EL RESULTADO DE LA INFO DEL USUARIO
        user.login(req.body.noEmpleado, req.body.password, function(result){
                if(result){
                        //GUARDAS EL USUARIO EN UNA SESION
                        req.session.user = result;
                        req.session.opp = 1;
                        res.redirect('principal');
                }else{
                        //SI LA FUNCION LOGIN REGRESA NULL ENVIAMOS UN ERROR DE INICIO
                      res.send('Usuario y contrasena incorrectos');
                }
        });  


});

//REGISTRO
router.post('/registro', (req, res, next)=>{
       let userInput = {
               noEmpleado: req.body.noEmpleado,
               nombre:req.body.nombre,
               puesto: req.body.puesto,
               admon: req.body.admon,
               password: req.body.password
       }
       
       //OBTENEMOS LA INFORMACION DEL USUARIO POR SU ID Y LO GUARDAMOS EN UNA SESION
        user.create(userInput, function(lastId){
                if(lastId){
                        user.find(lastId, function(result){
                        req.session.user = result;
                        req.session.opp = 0;
                        Swal.fire({
                                position: 'top-end',
                                type: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        res.redirect('/inicio');
                        });
                }else{
                        Swal.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: 'Algo ha salido mal, intentalo mas tarde!',
                              })
                }
        });

       
});

module.exports = router;