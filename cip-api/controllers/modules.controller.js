const db = require("../models/index.js");
const Course = db.courses; const Module = db.modules;
const { Op, ValidationError } = require('sequelize');

exports.create = async (req, res) => {
    if (req.loggedRole != 'admin') {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        try {
            let course = await Course.findOne({ where: { courseName: req.params.courseName } })
            if (course === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any course with name ${req.params.courseName}.`
                });
            let newModule = await Module.create({
                topic: req.body.topic,
                date: req.body.date,
                hours: req.body.hours,
                trainer: req.body.trainer,
                type: req.body.type,
                idCourse: course.id,
            });
            res.status(201).json({
                success: true, msg: `Module with name ${req.body.topic} created.`,
            });
        } catch (err) {
            if (err instanceof ValidationError)
                res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
            else
                res.status(500).json({
                    success: false, msg: err.message || "Some error occurred while creating the module."
                });
        };
    };
};


exports.findAll = async (req, res) => {
    try {

        let course = await Course.findOne({ where: { courseName: req.params.courseName } })

        let module = await Module.findAll({ where: { idCourse: course.id } })

        res.status(200).json({
            success: true, module
        });
    } catch (err) {
        res.status(500).json({
            success: false, msg: err.message || "Some error occurred while retrieving the course."
        })
    }
}


exports.delete = async (req, res) => {
    if (req.loggedRole != 'admin') {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        try {
            let course = await Course.findOne({ where: { courseName: req.params.courseName } })
            if (course === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any course with name ${req.params.courseName}.`
                });

            let module = await Module.findOne({ where: { topic: req.params.topic, idCourse: course.id } })
            if (module === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any module with name '${req.params.topic}'.`
                });

            let result = await Module.destroy({ where: { topic: req.params.topic, idCourse: course.id } })

            if (result == 1)
                return res.status(200).json({
                    success: true, msg: `Module with name '${req.params.topic}' was successfully deleted!`
                });
            res.status(404).json({
                success: false, msg: `Cannot find any module with name '${req.params.topic}'.`
            });
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                success: false, msg: `Error deleting module with name ${req.params.topic}.`
            });
        };
    };
};

exports.update = async (req, res) => {
    if (req.loggedRole != 'admin') {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        try {
            let course = await Course.findOne({ where: { courseName: req.params.courseName } });
            if (course === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any course with name ${req.params.courseName}.`
                });

            let module = await Module.findOne({ where: { topic: req.params.topic, idCourse: course.id } })
            if (module === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any module with name ${req.params.topic}.`
                });

            let affectedRows = await Module.update(req.body, { where: { topic: req.params.topic, idCourse: course.id } })
            console.log(affectedRows)
            if (affectedRows[0] === 0)
                return res.status(200).json({
                    success: true, msg: `No updates were made on module with name ${req.params.topic}.`
                });

            res.json({
                success: true,
                msg: `Module with name ${req.params.topic} was updated successfully.`
            });
        }
        catch (err) {
            if (err instanceof ValidationError)
                return res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
            res.status(500).json({
                success: false, msg: `Error retrieving module with name ${req.params.topic}.`
            });
        };
    };
};