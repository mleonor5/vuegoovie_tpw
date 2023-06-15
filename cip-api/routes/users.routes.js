const express = require('express');
const router = express.Router();
const Usercontroller = require('../controllers/users.controller')
const { validationResult, body, param } = require('express-validator')


const usercourseRouter = require("./usercourses.routes");

router.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const end = Date.now();
        const diffSeconds = (Date.now() - start) / 1000;
        console.log(`${req.method} ${req.originalUrl} completed in ${diffSeconds} seconds`);
    });
    next()
})

/**
 * @route POST /login
 * @group Users
 * @param {object} object.body - User's Credentials - eg. {"username":"admin", "password":"1234"}
 * @returns {object} 200 - Bearer Token
 * @returns {Error} 400 - Unexpected error
 */
router.post('/login', function (req, res) {
    Usercontroller.login(req, res);
})


/**
 * @route POST /register
 * @group Users
 * @param {object} object.body - User's Credentials - eg. {"username":"admin", "password":"1234", "role": "professor", "email": "professor@email.com", "school": "someSchool"} 
 * @returns {object} 200 - Created User
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 406 - Duplicated User
 */
router.post('/register', [
    body('username').notEmpty().escape(),
    body('password').notEmpty().escape(),
    body('role').notEmpty().escape(),
    body('email').notEmpty().escape()
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        Usercontroller.register(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})


/**
 * @route GET /users
 * @group Users
 * @returns {object} 200 - An array of Users info
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/', function (req, res) {
    Usercontroller.getAllUsers(req, res)
})


/**
 * @route GET /users/{username}
 * @group Users
 * @param {string} name.path - Users' username
 * @returns {object} 200 - An array of Users info
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/:username', [
    param('username').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        Usercontroller.getOne(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})


/**
 * @route PATCH /users/{username}
 * @group Users
 * @param {string} name.path - Users' username
 * @returns {object} 200 - User updated
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.patch('/:username', function (req, res) {
    Usercontroller.updatePassword(req, res)
})

/**
 * @route PUT /users/{username}
 * @group Users
 * @param {string} name.path - Users' username
 * @returns {object} 200 - User updated
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.put('/:username', function (req, res) {
    Usercontroller.updateUser(req, res)
})

/**
 * @route PUT /users/{username}/addPoints
 * @group Users
 * @param {string} name.path - Users' username
 * @returns {object} 200 - Added points to User
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.put('/:username/addPoints', function (req, res) {
    Usercontroller.addPoints(req, res)
})

/**
 * @route PUT /users/{username}/addCoins
 * @group Users
 * @param {string} name.path - Users' username
 * @returns {object} 200 - Added coins to User
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.put('/:username/addCoins', function (req, res) {
    Usercontroller.addCoins(req, res)
})

/**
 * @route PUT /users/{username}/takeCoins
 * @group Users
 * @param {string} name.path - Users' username
 * @returns {object} 200 - Taken coins to User
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.put('/:username/takeCoins', function (req, res) {
    Usercontroller.takeCoins(req, res)
})

/**
 * @route DELETE /users/{username}
 * @group Users
 * @param {string} name.path - Users' username
 * @returns {object} 200 - User deleted
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.delete('/:username', function (req, res) {
    Usercontroller.deleteUser(req, res)
})

router.use('/:username/usercourse', usercourseRouter)

router.all('*', function (req, res) {

    res.status(404).json({ message: 'Users: what???' });
})

module.exports = router;