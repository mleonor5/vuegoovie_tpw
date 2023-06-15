/**
 * @typedef Module
 * @property {string} topic.required
 * @property {string} date.required
 * @property {integer} hours.required
 * @property {string} trainer.required
 * @property {string} type.required
 */
module.exports = (sequelize, DataTypes) => {
    const Modules = sequelize.define("modules", {
        topic: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
            validate: { notNull: { msg: "Topic can not be empty or null!" } }
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Date can not be empty or null!" } }
        },
        hours: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { notNull: { msg: "Hours can not be empty or null!" } }
        },
        trainer: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Trainer can not be empty or null!" } }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Type can not be empty or null!" } }
        },
    }, {
        timestamps: false
    });
    return Modules;
};