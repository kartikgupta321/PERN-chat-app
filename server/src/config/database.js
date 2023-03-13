const Sequelize = require('sequelize');

module.exports =  new Sequelize(process.env.POSTGRES_DB || 'epatra',process.env.POSTGRES_USER ||'postgres',process.env.POSTGRES_PASSWORD ||'2505', {
    host: process.env.PSQL_HOST || 'localhost',
    dialect: 'postgres',
    logging:false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });

  