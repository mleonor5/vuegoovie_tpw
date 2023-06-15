const express = require('express');
const router = express.Router();
const Newscontroller = require('../controllers/news.controller')
const { validationResult, body, param } = require('express-validator')

/**
 * @route GET /news/
 * @group News
 * @returns {object} 200 - An array of News info
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/', function (req, res) {
    Newscontroller.getAllNews(req, res)
})


/**
 * @route GET /news/
 * @group News
 * @param {string} name.path - News' info
 * @returns {object} 200 - News 
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */
router.get('/:summary', [
    param('summary').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        Newscontroller.getOneNews(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})


module.exports = router;