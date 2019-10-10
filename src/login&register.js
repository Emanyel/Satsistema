const bcrypt = require('bcryptjs');
const pool = require('./database');

function User() {};

User.prototype = {

    find: function(user = null, callback)
    {
        if(user){
            var field = Number.isInteger(user) ? 'noEmpleado' : 'no_empleado';
        }
        let sql = `SELECT * FROM  info_usuario WHERE ${field} = ?`;

        pool.query(sql, user, function(err, result){
            if(err) throw err
            callback(result);

        });
    },
//REGISTRAR USUARIO
    create:  function(body, callback){
        let password = body.password; 
         body.password =  bcrypt.hashSync(password, 10);

        let sql = 'INSERT INTO info_usuario (no_empleado, password) VALUES (?, ?)';
            var bind= [];

            for(prop in body){
                bind.push(prop);
            }

            pool.query(sql, bind, function(err, lastId){
                if(err) throw err;
                callback(lastId);
            });
    }, 

    login: function(noEmpleado, password, callback){
        this.find(noEmpleado, function(user){
                if(user){
                    if(bcrypt.compareSync(password, user.password)){
                        callback(result);
                        return;
                    }
                }

                callback(null);
        });
    }
}

module.exports = User;