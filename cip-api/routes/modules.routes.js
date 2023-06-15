const express = require('express');

const modulesController = require("../controllers/modules.controller");


let router = express.Router({ mergeParams: true });


/**
 * @route GET /courses/{courseName}/modules
 * @group Modules
 * @returns {object} 200 - An array of Modules info
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/', function (req, res) {
    modulesController.findAll(req, res)
})

/**
 * @route POST /courses/{courseName}/modules
 * @group Modules
 * @param {object} object.body - Module - eg. {"topic": "Hardware", "date": "25/52/2002","hours": 40,"trainer": "Manuel", "type": "TP", idCourse: 2 }
 * @returns {object} 200 - New Module
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.post('/', function (req, res) {
    modulesController.create(req, res)
})


/**
 * @route PUT /courses/{courseName}/modules/{topic}
 * @group Module
 * @param {string} name.path - Module's info
 * @returns {object} 200 - Module updated
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.put('/:topic', function (req, res) {
    modulesController.update(req, res)
})

/**
 * @route DELETE /courses/{courseName}/modules/{topic}
 * @group Module
 * @param {string} name.path - Module's info
 * @returns {object} 200 - Module deleted
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.delete('/:topic', function (req, res) {
    modulesController.delete(req, res)
})

router.all('*', function (req, res) {
    res.status(404).json({ message: 'MODULES: what???' });
})

module.exports = router;  