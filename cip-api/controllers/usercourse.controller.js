const db = require("../models/index.js");
const Course = db.courses; const Usercourse = db.usercourse; const User = db.users;
const { Op, ValidationError } = require('sequelize');

exports.create = async (req, res) => {
    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username) {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        try {

            let user = await User.findOne({ where: { username: req.params.username } })
            if (user === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any user with name ${req.params.username}.`
                });


            let course = await Course.findOne({ where: { courseName: req.params.courseName } })
            if (course === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any course with name ${req.params.courseName}.`
                });

            let usercourse = await Usercourse.findOne({ where: { idCourse: course.id, idUser: user.id } })
            if (usercourse != null)
                return res.status(404).json({
                    success: false, msg: `User ${req.params.username} already as a certificate for this course.`
                });
            await Usercourse.create({
                completed: req.body.completed,
                certificate: req.body.certificate,
                idCourse: course.id,
                idUser: user.id,
            });
            res.status(201).json({
                success: true, msg: `Usercourse created.`,
            });
        } catch (err) {
            // console.log(err.name) // err.name === 'SequelizeValidationError'
            if (err instanceof ValidationError)
                res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
            else
                res.status(500).json({
                    success: false, msg: err.message || "Some error occurred while creating the usercourse."
                });
        };
    };
}


exports.findAll = async (req, res) => {
    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username) {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        try {

            let user = await User.findOne({ where: { username: req.params.username } })
            if (user === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any user with name ${req.params.username}.`
                });
            let usercourse = await Usercourse.findAll({ where: { idUser: user.id } })


            res.status(200).json({
                success: true, usercourse
            });
        } catch (err) {
            res.status(500).json({
                success: false, msg: err.message || "Some error occurred while retrieving the usercourse."
            })
        }
    }
}

exports.findOne = async (req, res) => {
    let usercourse = await Usercourse.findOne({ where: { id: req.params.idUsercourse, idUser: user.id } })
    if (usercourse === null)
        return res.status(404).json({
            success: false, msg: `Cannot find any usercourse with id ${req.params.idUsercourse}.`
        });

    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username || req.loggedId != usercourse.idUser) {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        try {

            let user = await User.findOne({ where: { username: req.params.username } })
            if (user === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any user with name ${req.params.username}.`
                });

            res.status(200).json({
                success: true, usercourse
            });
        } catch (err) {
            res.status(500).json({
                success: false, msg: err.message || "Some error occurred while retrieving the usercourse."
            })
        }
    }
}


exports.delete = async (req, res) => {
    let usercourse = await Usercourse.findOne({ where: { id: req.params.idUsercourse, idUser: user.id } })
    if (usercourse === null)
        return res.status(404).json({
            success: false, msg: `Cannot find any usercourse with id ${req.params.idUsercourse}.`
        });

    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username || req.loggedId != usercourse.idUser) {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        try {
            let user = await User.findOne({ where: { username: req.params.username } })
            if (user === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any user with name ${req.params.username}.`
                });


            let result = await Usercourse.destroy({ where: { id: req.params.idUsercourse, idUser: user.id } })


            if (result == 1)
                return res.status(200).json({
                    success: true, msg: `Usercourse with id'${req.params.idUsercourse}' was successfully deleted!`
                });

            res.status(404).json({
                success: false, msg: `Cannot find any usercourse with id '${req.params.idUsercourse}'.`
            });
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                success: false, msg: `Error deleting usercourse with id ${req.params.idUsercourse}.`
            });
        };
    };
};

exports.update = async (req, res) => {
    let usercourse = await Usercourse.findOne({ where: { id: req.params.idUsercourse, idUser: user.id } })
    if (usercourse === null)
        return res.status(404).json({
            success: false, msg: `Cannot find any usercourse with id ${req.params.idUsercourse}.`
        });

    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username || req.loggedId != usercourse.idUser) {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        try {

            let user = await User.findOne({ where: { username: req.params.username } });
            if (user === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any user with name ${req.params.username}.`
                });

            let affectedRows = await Usercourse.update(req.body, { where: { id: req.params.idUsercourse, idUser: user.id } })
            console.log(affectedRows)
            if (affectedRows[0] === 0)
                return res.status(200).json({
                    success: true, msg: `No updates were made on usercourse with id ${req.params.idUsercourse}.`
                });

            res.json({
                success: true,
                msg: `Usercourse with id ${req.params.idUsercourse} was updated successfully.`
            });
        }
        catch (err) {
            if (err instanceof ValidationError)
                return res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
            res.status(500).json({
                success: false, msg: `Error retrieving usercourse with id ${req.params.idUsercourse}.`
            });
        };
    };
};