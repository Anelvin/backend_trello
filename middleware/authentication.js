const jwt = require('jsonwebtoken');
const secretKey = require('../keys/index');

const token = {};

token.generate = function(user){
    let data = {
        username: user.name,
        password: user.password
    };
    return newToken = jwt.sign(data, secretKey.secretKey, {
        expiresIn: 60
    });
}

module.exports = token;