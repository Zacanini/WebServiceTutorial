module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "zacanini1302",
    DB: "tutorial",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
