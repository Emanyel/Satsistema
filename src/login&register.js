const bcrypt = require('bcrypt');
const pool = require('./database');

function User() {};

User.prototype = {

    find:  function(user = null, callback)
    {
        if(user){
            var field = Number.isInteger(user) ? 'noEmpleado' : 'no_empleado';
        }
        let sql =  `SELECT * FROM  usuarios WHERE ${field} = ?`;

        pool.query(sql, user, function(err, result){
            if(err) throw err
            if(result.length){
                callback(result[0]);
            }else{
                callback(result);
            }
        });
    },
//REGISTRAR USUARIO
    create:   function(body, callback){
        let pwd = body.password; 
         body.password =  bcrypt.hashSync(pwd, 10);

            var bind= [];

            for(prop in body){
                bind.push(prop);
            }

            let sql =  `INSERT INTO usuarios (no_empleado, nombre, puesto, admon_gen, password) VALUES (?, ?, ?, ?, ?)`;
            pool.query(sql, bind, function(err, result){
                if(err) throw err;
                //REGRESA EL ULTIMO ID INSERTADO SI NO HAY ERROR
                callback(result.insertId);
            });
    }, 

    login: function(noEmpleado, password, callback){
        this.find(noEmpleado, function(user){
                if(user){
                    console.log(user);
                    console.log(password);
                    if(bcrypt.compare(password, user.password)){
                        callback(user);
                        return;
                    }
                }

                callback(null);
        });
    }
}

module.exports = User;