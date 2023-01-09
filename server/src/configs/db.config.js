module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "2505",
    DB: "epatra",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };