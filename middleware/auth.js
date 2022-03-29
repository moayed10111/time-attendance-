const jwt = require('jsonwebtoken')
const generateToken = (payload) => {
    const token = jwt.sign({name:payload},'Moayed',{
        algorithm:'HS256',
        expiresIn:'1d',
    });
    return token
};

const verifyToken = (token)=>{
    console.log(token)
    const decode = jwt.verify(token,'Moayed',(error,decode)=>{
        if (error) throw new Error(error.message);
        return decode;
    });
    return decode;
};

module.exports = {generateToken,verifyToken};