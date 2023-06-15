const db = require("../models/index.js");
const Course = db.courses
const { Op, ValidationError } = require('sequelize');

exports.createCourse = async (req, res) => {
    if (req.loggedRole != 'admin') {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        const courseToCreate = new Course({
            courseName: req.body.courseName,
            trainers: req.body.trainers,
            duration: req.body.duration,
            rewardPoints: req.body.rewardPoints,
            rewardCoins: req.body.rewardCoins,
            price: req.body.price,
            description: req.body.description
        })

        Course.findAll({ where: { courseName: req.body.courseName } }).then((course_) => {
            if (course_.length > 0) {
                res.status(406).send("Duplicated course");
            } else {
                courseToCreate.save().then((newCourse) => {
                    res.status(200).send("Course created");
                }).catch((err) => {
                    res.status(400).send(err);
                })
            }
        }).catch((err) => {
            if (err instanceof ValidationError)
                res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
            else
                res.status(500).json({
                    success: false, msg: err.message || "Some error occurred while creating the course."
                });
        })
    };
}

exports.getAllCourses = async (req, res) => {

    let { page, size, title } = req.query;

    if (page && !req.query.page.match(/^(0|[1-9]\d*)$/g)) {
        res.status(400).json({ message: 'Page number must be 0 or a positive integer' });
        return;
    }
    else
        page = parseInt(page);
    if (size && !req.query.size.match(/^([1-9]\d*)$/g)) {
        res.status(400).json({ message: 'Size must be a positive integer' });
        return;
    } else
        size = parseInt(size);

    const limit = size ? size : 12;
    const offset = page ? page * limit : 0;


    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Course.findAll({
        where: condition,
        limit,
        offset
    }).then((result) => {
        res.status(200).json(result)
    }).catch((error) => {
        res.status(400).send('error')
    })
}


exports.getOneCourseByCourseName = async (req, res) => {
    try {

        let course = await Course.findOne({ where: { courseName: req.params.courseName } })

        if (course === null)
            res.status(404).json({
                success: false, msg: `Cannot find any course with name ${req.params.courseName}.`
            });
        else
            res.json({ success: true, course: course });
    }
    catch (err) {
        res.status(500).json({
            success: false, msg: `Error retrieving course with name ${req.params.courseName}.`
        });
    };
};

exports.getOneCourseById = async (req, res) => {
    try {

        let course = await Course.findOne({ where: { id: req.params.idCourse } })

        if (course === null)
            res.status(404).json({
                success: false, msg: `Cannot find any course with id ${req.params.idCourse}.`
            });
        else
            res.json({ success: true, course: course });
    }
    catch (err) {
        res.status(500).json({
            success: false, msg: `Error retrieving course with id ${req.params.idCourse}.`
        });
    };
};

exports.updateCourse = async (req, res) => {
    if (req.loggedRole != 'admin') {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        try {

            let course = await Course.findOne({ where: { courseName: req.params.courseName } });
            if (course === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any course with name ${req.params.courseName}.`
                });

            let affectedRows = await Course.update(req.body, { where: { courseName: req.params.courseName } })

            if (affectedRows[0] === 0)
                return res.status(200).json({
                    success: true, msg: `No updates were made on course with name ${req.params.courseName}.`
                });
            res.json({
                success: true,
                msg: `Course with name ${req.params.courseName} was updated successfully.`
            });
        }
        catch (err) {
            if (err instanceof ValidationError)
                return res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
            res.status(500).json({
                success: false, msg: `Error retrieving course with name ${req.params.courseName}.`
            });
        };
    };
};


exports.deleteCourse = async (req, res) => {
    if (req.loggedRole != 'admin') {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        try {
            let obj = await Course.findOne({ where: { courseName: req.params.courseName } });
            let result = await Course.destroy({ where: { id: obj.id } });
            if (result == 1)
                return res.status(200).json({
                    success: true, msg: `Course with name ${req.params.courseName} was successfully deleted!`
                });

            res.status(404).json({
                success: false, msg: `Cannot find any course with name ${req.params.courseName}.`
            });
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                success: false, msg: `Error deleting courseName with name ${req.params.courseName}.`
            });
        };
    };
};