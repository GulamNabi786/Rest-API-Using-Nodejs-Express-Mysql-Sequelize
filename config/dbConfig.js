module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'node_sequelize_api_db',
    dialect: 'mysql',  //dialect means which kind of database we are using 

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}