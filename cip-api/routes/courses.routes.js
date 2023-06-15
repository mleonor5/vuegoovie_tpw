const express = require('express');
const router = express.Router();
const Coursecontroller = require('../controllers/courses.controller')
const { validationResult, body, param } = require('express-validator')


const modulesRouter = require("./modules.routes");


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
 * @route POST /courses
 * @group Courses
 * @param {object} object.body - Course - eg. {"courseName": "Curso", "duration": "40h","price": 40,"trainers": "Manuel", "rewardCoins": 14, "rewardPoins": 2, "description": "Curso bom" }
 * @returns {object} 200 - New Course
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.post('/', [
    body('courseName').notEmpty().escape(),
    body('trainers').notEmpty().escape(),
    body('duration').notEmpty().escape(),
    body('rewardPoints').notEmpty().escape(),
    body('rewardCoins').notEmpty().escape(),
    body('description').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        Coursecontroller.createCourse(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})

/**
 * @route GET /courses/{courseName}
 * @group Courses
 * @returns {object} 200 - An array of Courses info
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/', function (req, res) {
    Coursecontroller.getAllCourses(req, res)
})


/**
 * @route GET /courses/{courseName}
 * @group Course
 * @param {string} name.path - Course's info
 * @returns {object} 200 - Course 
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/:courseName', [
    param('courseName').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        Coursecontroller.getOneCourseByCourseName(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})


/**
 * @route GET /courses/{idCourse}
 * @group Course
 * @param {string} name.path - Course's info
 * @returns {object} 200 - Course
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/id/:idCourse', [
    param('idCourse').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        Coursecontroller.getOneCourseById(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})


/**
 * @route PUT /courses/{courseName}
 * @group Course
 * @param {string} name.path - Course's info
 * @returns {object} 200 - Course updated
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.put('/:courseName', function (req, res) {
    Coursecontroller.updateCourse(req, res)
})


/**
 * @route DELETE /courses/{courseName}
 * @group Course
 * @param {string} name.path - Course's info
 * @returns {object} 200 - Course deleted
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.delete('/:courseName', function (req, res) {
    Coursecontroller.deleteCourse(req, res)
})


router.use('/:courseName/modules', modulesRouter)

router.all('*', function (req, res) {

    res.status(404).json({ message: 'Users: what???' });
})

module.exports = router;