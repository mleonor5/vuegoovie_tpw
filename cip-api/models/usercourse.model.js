/**
 * @typedef UserCourse
 * @property {boolean} completed
 * @property {json} certificate
 */
module.exports = (sequelize, DataTypes) => {
    const UserCourse = sequelize.define("usercourse", {
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        certificate: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: {},
        },
    }, {
        timestamps: false
    });
    return UserCourse;
};