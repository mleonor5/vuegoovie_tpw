const dbConfig = require('../config/db.config.js');
const { Sequelize, DataTypes } = require('sequelize');



const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
    ,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

(async () => {
    try {
        await sequelize.authenticate;
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
})();

const db = {};
db.sequelize = sequelize;


db.users = require("./users.model.js")(sequelize, DataTypes);
db.courses = require("./courses.model.js")(sequelize, DataTypes);
db.modules = require("./modules.model.js")(sequelize, DataTypes);
db.usercourse = require("./usercourse.model.js")(sequelize, DataTypes);
db.news = require("./news.model.js")(sequelize, DataTypes);


db.courses.hasMany(db.modules, { foreignKey: 'idCourse', onDelete: 'CASCADE' });
db.modules.belongsTo(db.courses,);


db.users.hasMany(db.usercourse, { foreignKey: 'idUser', onDelete: 'CASCADE' });
db.usercourse.belongsTo(db.users);


db.courses.hasMany(db.usercourse, { foreignKey: 'idCourse', onDelete: 'CASCADE' });
db.usercourse.belongsTo(db.courses);

sequelize.sync().then().catch(error => {
    console.log(error);
})
module.exports = db;