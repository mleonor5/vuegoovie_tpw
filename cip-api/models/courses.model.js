/**
 * @typedef Course
 * @property {string} courseName.required
 * @property {string} trainers.required
 * @property {string} duration.required
 * @property {integer} rewardCoins.required
 * @property {integer} rewardPoints.required
 * @property {string} price
 * @property {string} description.required
 */
module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define("courses", {
        courseName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { notNull: { msg: "The name of the course can not be empty!" } }
        },
        trainers: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "The trainer section can not be empty!" } }
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Duration can not be empty!" } }
        },
        rewardPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { notNull: { msg: "RewardPoints can not be empty!" } }
        },
        rewardCoins: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { notNull: { msg: "RewardCoins can not be empty!" } }
        },
        price: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: "Description can not be empty!" } },
        }
    }, {
        timestamps: false
    });
    return Courses;
};