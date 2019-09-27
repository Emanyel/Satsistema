const bcrypt = require('bcryptjs');
const pool = require('./database');

function User() {};

User.prototype = {

    find: function(user = null, callback)
    {
        if(user){
            var field = Number.isInteger(user) ? 'noEmpleado' : 'no_empleado';
        }
        let sql = `SELECT * FROM  usuarios WHERE ${field} = ?`;

        pool.query(sql, user, function(err, result){
            if(err) throw err
            callback(result);

        });
    },
//REGISTRAR USUARIO
    create:  function(body, callback){
        let pass = body.password;
         body.password =  bcrypt.hashSync(pass, 10);

        let sql = 'INSERT INTO usuarios (no_empleado, password, password2 ) VALUES (?, ?, ?)';
            var bind= [];

            for(prop in body){
                bind.push(prop);
            }

            pool.query(sql, bind, function(err, lastId){
                if(err) throw err;
                callback(lastId);
            });
    }, 

    login: function(noEmpleado, pass, callback){
        this.find(noEmpleado, function(user){
                if(user){
                    if(bcrypt.compareSync(pass, user.password)){
                        callback(result);
                        return;
                    }
                }

                callback(null);
        });
    }
}

module.exports = User;