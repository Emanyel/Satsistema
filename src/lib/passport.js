const passport = require('passport'); //AUTENTICACION DE USUARIOS
const LocalStrategy = require('passport-local').Strategy; //localmente
const pool = require('../database');
const helpers = require('./helpers');
//VALIDAR EL LOGIN Y GUARDAR LA SESION
passport.use('local.inicio', new LocalStrategy({
    empleadoField:'empleado',
    passwordField: 'password',
    passReqToCallback: true 
}, async (req, empleado, password, done)=>{
    /*const rows = await pool.query('SELECT * FROM usuarios WHERE no_empleado= ?', [empleado]);
    if(rows.length > 0){
        const user = rows[0];
        const validpass = await helpers.compararContraLogin(password, user.password);
        if(validpass){
            done(null, user, req.flash('success','Bienvenido', user.empleado));
        }else{
            done(null, false, req.flash('message','Contrasena incorrecta'));
        }
    }else{
        done(null, false, req.flash('message','El numero de usuario no existe'));
    }*/
    console.log(req.body);
}));

//PARA VALIDAR EL REGISTRO Y GUARDAR LA SESION
passport.use('local.registro', new LocalStrategy({
    empleadoField:'empleado',
    passwordField: 'password',
    password2Field: 'password2',
    passReqToCallback: true //SE RECIBE EL REQUEST EN UNA FUNCION QUE SE VA A EJECUTAR
}, async(req, empleado, password, password2, done)=>{
        let newUser = { 
            empleado,
            password,
            password2
        };
        newUser.password = await helpers.encriptarPassword(password);
        const result = await pool.query('INSERT INTO usuarios SET ?', newUser);
        return done(null, newUser);
}));

/*passport.serializeUser((user, done)=>{
    done(null, user.empleado );
})

passport.deserializeUser(async(empleado, done)=>{
    const rows = await pool.query('SELECT * FROM users WHERE no_empleado= ?', [empleado] );
    done(null, rows[0]);
})*/