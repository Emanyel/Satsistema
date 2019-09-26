const bcrypt = require('bcryptjs');
const pool = require('./database');

function User() {};

User.prototype = {

    find: function(user = null, callback)
    {
        if(user){
            var field = Number.isInteger(user) ? 'noEmpleado' : 'username';
        }
        let sql = 'SELECT * FROM  users WHERE ${field} = ?';

        pool.query(sql, user, function(err, result){
            if(err) throw err
            callback(result);

        });
    },

    create: function(body, callback){
        let password = body.password;
        body.password = bcrypt.hashSync(password, 10);

        let sql = 'INSERT INTO users (noEmpleado, password, password2 ) VALUES (?, ?, ?)';
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