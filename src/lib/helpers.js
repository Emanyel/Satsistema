const bcrypt = require('bcryptjs');
const helpers = {};


helpers.encriptarPassword = async(password) =>{
    const cifrado = await bcrypt.genSalt(10); //CREA UN HASH Y LO EJECUTA LAS VECES SEGUN EL NUMERO ESPECIFICADO
    const hash = await bcrypt.hash(password, cifrado);
    return hash;
};

//PARA EL LOGIN
helpers.compararContraLogin = async (password, BDpassword)=>{
    try{
        return await bcrypt.compare(password, BDpassword);
    } catch(e){
    console.log(e);
    }
};

    module.exports = helpers;