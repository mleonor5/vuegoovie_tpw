require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;
const jwt = require('./jwt')

// Swagger
const expressSwagger = require('express-swagger-generator')(app);
const options = require('./swagger_conf');
expressSwagger(options);


const auth = function (req, res, next) {
    let exceptions = ['/users/login', '/users/register', '/'];
    if (exceptions.indexOf(req.url) >= 0) {
        next();
    } else {
        jwt.validateToken(req.headers.authorization, req, (result) => {
            if (result) {
                next();
            } else {
                res.status(401).send("Invalid Token");
            }
        })
    }
}


app.use(cors());
app.use(express.json());
app.use(auth)


app.get('/', function (req, res) {
    res.status(200).json({ message: 'HOME -- CIP API' });
});


app.use('/users', require('./routes/users.routes.js'))
app.use('/courses', require('./routes/courses.routes.js'))
app.use('/news', require('./routes/news.routes.js'))

app.get('*', function (req, res) {
    res.status(404).json({ message: 'WHAT???' });
})
app.listen(port, host, () => console.log(`App listening at http://${host}:${port}/`));