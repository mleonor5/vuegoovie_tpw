const jwt = require('../jwt')
const db = require("../models/index.js");
const User = db.users
const bcrypt = require('bcrypt');


const { Op, ValidationError } = require('sequelize');

exports.login = async (req, res) => {
    User.findAll({
        where: { username: req.body.username }
    }).then((user_) => {
        console.log(user_.length);
        if (user_.length > 0) {

            bcrypt.compare(req.body.password, user_[0].password).then(function (result) {
                if (result) {
                    jwt.generateToken({ user: req.body.username }, (token) => {
                        res.status(200).json(token);

                    })
                } else {
                    res.status(401).send("Not Authorized");
                }
            });


        } else {
            res.status(401).send("Not Authorized 2");
        }
    }).catch((err) => {
        res.status(400).send(err);
    })
}

exports.register = async (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            const userToCreate = new User({ username: req.body.username, role: req.body.role, email: req.body.email, password: hash, school: req.body.school, points: req.body.points, coins: req.body.coins });
            User.findAll({ where: { username: req.body.username } }).then((user_) => {
                if (user_.length > 0) {
                    res.status(406).send("Duplicated User");
                } else {
                    userToCreate.save().then((newUser) => {
                        res.status(200).send("Registered User");
                    }).catch((err) => {
                        res.status(400).send(err);
                    })
                }
            }).catch((err) => {
                if (err instanceof ValidationError)
                    res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
                else
                    res.status(500).json({
                        success: false, msg: err.message || "Some error occurred while creating the user."
                    });
            })
        });
    });
}

exports.getAllUsers = async (req, res) => {
    if (req.loggedRole != 'admin') {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
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

        // search by title require to build a query with the operator LIKE
        const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
        User.findAll({
            where: condition,
            limit,
            offset
        }).then((result) => {
            res.status(200).json(result)
        }).catch((error) => {
            res.status(400).send('error')
        })
    };
}

exports.getOne = async (req, res) => {
    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username) {
        res.status(401).json({ message: 'Unauthorized! You are not admin' });
    } else {
        try {
            let user = await User.findOne({ where: { username: req.params.username } })

            if (user === null)
                res.status(404).json({
                    success: false, msg: `Cannot find any user with name ${req.params.username}.`
                });
            else
                res.json({ success: true, user: user });
        }
        catch (err) {
            res.status(500).json({
                success: false, msg: `Error retrieving user with name ${req.params.username}.`
            });
        };
    };
};

exports.deleteUser = async (req, res) => {
    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username) {
        res.status(401).json({ message: 'Unauthorized!' });
    } else {
        try {
            let result = await User.destroy({ where: { username: req.params.username } })

            if (result == 1)
                return res.status(200).json({
                    success: true, msg: `User with name ${req.params.username} was successfully deleted!`
                });

            res.status(404).json({
                success: false, msg: `Cannot find any user with name ${req.params.username}.`
            });
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                success: false, msg: `Error deleting user with name ${req.params.username}.`
            });
        };
    };
};
exports.updatePassword = async (req, res) => {
    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username) {
        res.status(401).json({ message: 'Unauthorized!' });
    } else {
        try {
            let user = await User.findOne({ where: { username: req.params.username } });
            if (user === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any user with name ${req.params.username}.`
                });

            const saltRounds = 10
            const salt = bcrypt.genSaltSync(saltRounds)
            let hashedPassword = bcrypt.hashSync(req.body.password, salt)

            let affectedRows = await User.update({ password: hashedPassword, }, { where: { username: req.params.username } })

            if (affectedRows[0] === 0)
                return res.status(200).json({
                    success: true, msg: `No updates were made on user with name ${req.params.username}.`
                });

            res.json({
                success: true,
                msg: `User with name ${req.params.username} was updated successfully.`
            });
        }
        catch (err) {
            if (err instanceof ValidationError)
                return res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
            res.status(500).json({
                success: false, msg: `Error retrieving user with name ${req.params.username}.`
            });
        };
    };
};

exports.updateUser = async (req, res) => {
    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username) {
        res.status(401).json({ message: 'Unauthorized!' });
    } else {
        try {
            let user = await User.findOne({ where: { username: req.params.username } });
            if (user === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any user with name ${req.params.username}.`
                });

            let obj = req.body
            delete obj.password

            let affectedRows = await User.update(obj, { where: { username: req.params.username } })

            if (affectedRows[0] === 0)
                return res.status(200).json({
                    success: true, msg: `No updates were made on user with name ${req.params.username}.`
                });

            res.json({
                success: true,
                msg: `User with name ${req.params.username} was updated successfully.`
            });

        }
        catch (err) {
            if (err instanceof ValidationError)
                return res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
            res.status(500).json({
                success: false, msg: `Error retrieving user with name ${req.params.username}.`
            });
        };
    };
};

exports.addPoints = async (req, res) => {
    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username) {
        res.status(401).json({ message: 'Unauthorized!' });
    } else {
        try {
            let user = await User.findOne({ where: { username: req.params.username } });
            if (user === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any user with name ${req.params.username}.`
                });

            if (!req.body.amount)
                return res.status(404).json({
                    success: false, msg: `I need an amount for user with name ${req.params.username}.`
                });
            const amount = req.body.amount
            await User.increment('points', { by: amount, where: { username: req.params.username } })
            res.json({
                success: true,
                msg: `User with name ${req.params.username} had points added.`
            });
        }
        catch (err) {
            if (err instanceof ValidationError)
                return res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
            res.status(500).json({
                success: false, msg: `Error retrieving user with name ${req.params.username}.`
            });
        };
    };
};

exports.addCoins = async (req, res) => {
    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username) {
        res.status(401).json({ message: 'Unauthorized!' });
    } else {
        try {
            let user = await User.findOne({ where: { username: req.params.username } });
            if (user === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any user with name ${req.params.username}.`
                });

            if (!req.body.amount)
                return res.status(404).json({
                    success: false, msg: `I need an amount for user with name ${req.params.username}.`
                });
            const amount = req.body.amount
            await User.increment('coins', { by: amount, where: { username: req.params.username } })
            res.json({
                success: true,
                msg: `User with name ${req.params.username} had coins added.`
            });
        }
        catch (err) {
            if (err instanceof ValidationError)
                return res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
            res.status(500).json({
                success: false, msg: `Error retrieving user with name ${req.params.username}.`
            });
        };
    };
};

exports.takeCoins = async (req, res) => {
    if (req.loggedRole == 'admin' || req.loggedUsername != req.params.username) {
        res.status(401).json({ message: 'Unauthorized!' });
    } else {
        try {
            let user = await User.findOne({ where: { username: req.params.username } });
            if (user === null)
                return res.status(404).json({
                    success: false, msg: `Cannot find any user with name ${req.params.username}.`
                });

            if (!req.body.amount)
                return res.status(404).json({
                    success: false, msg: `I need an amount for user with name ${req.params.username}.`
                });
            const amount = req.body.amount
            await User.decrement('coins', { by: amount, where: { username: req.params.username } })
            res.json({
                success: true,
                msg: `User with name ${req.params.username} had coins taken.`
            });
        }
        catch (err) {
            if (err instanceof ValidationError)
                return res.status(400).json({ success: false, msg: err.errors.map(e => e.message) });
            res.status(500).json({
                success: false, msg: `Error retrieving user with name ${req.params.username}.`
            });
        };
    }
};