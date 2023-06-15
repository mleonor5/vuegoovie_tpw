const express = require('express');

const usercourseController = require("../controllers/usercourse.controller");

let router = express.Router({ mergeParams: true });


/**
 * @route GET users/{username}/usercourse
 * @group Usercourses
 * @returns {object} 200 - An array of Usercourses info
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/', function (req, res) {
    usercourseController.findAll(req, res)
})

/**
 * @route POST users/{username}/usercourse/{courseName}
 * @group Usercourse
 * @param {object} object.body - Usercourse - eg. {"completed": true, "certificate": {}, idUser: 2, idCourse: 2 }
 * @returns {object} 200 - New Usercourse
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.post('/:courseName', function (req, res) {
    usercourseController.create(req, res)
})

/**
 * @route GET users/{username}/usercourse/{idUsercourse}
 * @group Usercourse
 * @param {string} name.path - Usercourse's usercourse
 * @returns {object} 200 - An array of Usercourse info
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/:idUsercourse', function (req, res) {
    usercourseController.findOne(req, res)
})

/**
 * @route PUT /users/{username}/usercourse/{idUsercourse}
 * @group Usercourse
 * @param {string} name.path - Usercourse' info
 * @returns {object} 200 - Usercourse updated
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.put('/:idUsercourse', function (req, res) {
    usercourseController.update(req, res)
})


/**
 * @route DELETE /users/{username}/usercourse/{idUsercourse}
 * @group Usercourse
 * @param {string} name.path - Usercourse's info
 * @returns {object} 200 - Usercourse deleted
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.delete('/:idUsercourse', function (req, res) {
    usercourseController.delete(req, res)
})

router.all('*', function (req, res) {
    res.status(404).json({ message: 'USERCOURSE: what???' });
})

module.exports = router;