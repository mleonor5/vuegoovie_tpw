const { Sequelize } = require('sequelize');
const sequelize = new Sequelize.Sequelize('joaoferr_ESMAPP_22_23_GRP8', 'joaoferr_ESMAPP_22_23_GRP8',
    'tFFUrEmQmegh', {
    host: 'www.joaoferreira.eu',
    dialect: 'mysql'
})

exports.sequelize = sequelize;