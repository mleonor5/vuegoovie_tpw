/**
 * @typedef News
 * @property {string} summary.required
 * @property {string} description.required
 * @property {string} img.required
 */
module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define("news", {
        summary: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return News;
};