const {Sequelize} = require('sequelize');


const sequelize = new Sequelize({
    database:process.env.DATABASE_NAME,
    username:process.env.DATABASE_USERNAME,
    password:process.env.DATABASE_PASSWORD,
    port:process.env.DATABASE_PORT,
    host:process.env.DATABASE_HOST,
    dialect:process.env.DATABASE_DIALECT,
    pool:
    {
        max:+process.env.DATABASE_POOL_MAX,
        min:+process.env.DATABASE_POOL_MIN,
        acquire:+process.env.DATABASE_POOL_AQUIRE,
        idle:+process.env.DATABASE_POOL_IDLE,
    }
});


const dbConnection={};
dbConnection.Sequelize = Sequelize;
dbConnection.sequelize = sequelize;

module.exports = {dbConnection};