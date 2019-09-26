const express = require('express');
const router = express.Router();


const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

//REGISTRAR USUARIO

//ENRUTADOR PARA PEDIR LOS DATOS de registro
router.get('/registro', isNotLoggedIn, (req,res)=>{
        res.render('auth/registro');
});

router.post('/registro', isNotLoggedIn, passport.authenticate('local.registro',  {
                successRedirect: '/inicio',
                failureRedirect: '/registro',
                failureFlash: true
}))



//INICIAR SESION
router.get('/inicio', isNotLoggedIn, (req, res)=>{
        res.render('auth/inicio');
});


router.post('/inicio', passport.authenticate('local.inicio', {
        successRedirect: '/principal',
        failureRedirect: '/inicio',
        failureFlash: true
        //})//(req, res, next);
       /* console.log(req.body);
        req.check('empleado', 'El numero de empleado es necesario').notEmpty();
        req.check('password', 'La contrasena es necesario').notEmpty();
        const errors = req.validationErrors();
        if (errors.length > 0) {
          req.flash('message', errors[0].msg);
          res.redirect('/inicio');
        }*/      
        

}));


      router.get('/principal', /*isLoggedIn*/ (req, res) => {
        res.render('principal');

      });  
      
      //EQUIPOS DE COMPUTO
router.get('/equipos/computo', /*isLoggedIn ,*/ (req, res)=>{
        res.render('equipos/equipos');
});

router.get('/equipos/accesorios', /*isLoggedIn ,*/ (req, res)=>{
        res.render('equipos/accesorios');
});
router.get('/equipos/impresoras', /*isLoggedIn ,*/ (req, res)=>{
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


router.get('/logout', isLoggedIn,(req, res)=>{
        req.logOut();
        res.render('/inicio');
});
module.exports = router;