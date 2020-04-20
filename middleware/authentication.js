import jwt from 'jsonwebtoken';
import secretKey from '../keys/index';

const token = {};

token.generate = function(user){
    let data = {
        username: user.email,
        password: user.password
    };
    let newToken = jwt.sign(data, secretKey.secretKey, {
        expiresIn: 60*60*24
    });
    return newToken;
}

token.verifyToken = function(req, res, next){
    let requestToken = req.headers['authorization'];
    if(!requestToken){
        return res.status(401).send({
            message: 'Es necesario un token'
        })
    }
    requestToken = requestToken.replace('Bearer ','');
    jwt.verify(requestToken, secretKey.secretKey, function(error, user){
     if(error){
            return res.status(401).send({
             ok:false,
             message:'Token inválido'
         })
     }else{
         next();
     }
    })
}

module.exports = token;