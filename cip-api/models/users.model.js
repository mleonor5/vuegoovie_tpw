/**
 * @typedef Users
 * @property {string} username.required
 * @property {string} role.required
 * @property {string} email.required
 * @property {string} password.required
 * @property {string} school.required
 * @property {integer} points
 * @property {integer} coins
 */
const sequelize = require('../connection/connection_mysql').sequelize
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { notNull: { msg: "Username can not be empty or null!" } }
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Role can not be empty or null!" } }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Email can not be empty or null!" } }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Password can not be empty or null!" } }
        },
        school: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaulValue: 0
        },
        coins: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
    }, {
        timestamps: false
    });
    return Users;
};