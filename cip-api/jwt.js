var jwt = require('jsonwebtoken');
const db = require("./models/index.js");
const User = db.users

let secret = "%)$2sF55Idf(Rm&jyPnkqAL^+8m4dSw)";

const generateToken = (user_info, callback) => {
    let token = jwt.sign({
        data: user_info,
    }, secret, { expiresIn: '24h' });
    return callback(token);
}

const validateToken = (token, req, callback) => {
    if (!token) {
        return callback(false);
    }
    jwt.verify(token.replace('Bearer ', ''), secret, function (error, decoded) {
        console.log(decoded);
        if (error) {
            return callback(false);
        } else {
            User.findAll({ where: { username: decoded.data.user } }).then((user) => {
                if (user.length > 0) {
                    req.loggedId = user[0].id
                    req.loggedUsername = user[0].username
                    req.loggedRole = user[0].role
                    return callback(true);
                } else {
                    return callback(false);
                }
            }).catch((err) => {
                return callback(false);
            })
        }
    })
}

exports.generateToken = generateToken
exports.validateToken = validateToken