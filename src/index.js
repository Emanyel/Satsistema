const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');
const User = require('./login&register');

const user = new User();

const {database} = require('./keys');



//inicializar
 const app = express();
 require('./lib/passport');

 // configuraciones del servidor
 app.set('port', process.env.PORT || 4000);
 app.set('vistas', path.join(__dirname, 'vistas'));
 app.engine('hbs', exphbs({
     defaultLayout: 'main', //ARCHIVO POR DEFECTO .HBS
     layoutsDir: path.join(app.get('vistas'), 'layouts'),
     partialsDir: path.join(app.get('vistas'), 'partials'),
     extname : '.hbs',
     helpers: require('./lib/handlebars')
 }));
app.set('view engine', '.hbs');

 // MIDDLEWARE PETICIONES AL SERVIDOR
 app.use(morgan('dev'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));

 app.set('views', path.resolve(__dirname, 'vistas'));
app.use(session({secret: 'emma', saveUninitialized: false, resave: false}));

app.use(session({
    secret: 'faztmysqlnodemysql',
    resave: false, //NO SE RENUEVE LA SESION
    saveUninitialized: false, //PARA NO SE VUELVA A ESTABLECER LA SESION
    store: new MySQLStore(database) //EN DONDE GUARDAR LA SESION EN LA BD
}));
app.use(flash());
app.use(express.urlencoded({extended: false})); // ACEPTAR DATOS SIMPLES COMO STRING EN LA URL EN EL FORM
app.use(express.json());
app.use(passport.initialize()); //PARA INICIAR PASSPORT
app.use(passport.session()); //PARA PODER MANEJAR LOS DATOS POR SESION


// variables globales
app.use((req, res, next)=>{
   app.locals.success=  req.flash('success');
   app.locals.message=  req.flash('message');
   app.locals.user = req.user;
    next();
});

// rutas url del servidor
app.use(require('./rutas'));
app.use(require('./rutas/authentication'));
app.use('/usuarios', require('./login&register'));

//public codigo que se puede acceder html, css, js
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto : ', app.get('port'));
});

