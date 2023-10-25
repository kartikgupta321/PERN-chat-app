const Sequelize = require('sequelize');
const test = require('dotenv').config({ path: 'C:/Users/karti/Desktop/ComputerScience/PERN chat app/.env' });
// require('dotenv').config()
console.log(test)

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
// console.log('details--',PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID)
// console.log('process.env', process.env);
// module.exports =  new Sequelize(process.env.POSTGRES_DB || 'epatra',process.env.POSTGRES_USER ||'postgres',process.env.POSTGRES_PASSWORD ||'2505', {
//     host: process.env.PSQL_HOST || 'localhost',
//     dialect: 'postgres',
//     logging:false,
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     },
//   });

module.exports = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: 5432,
    connection: {
        options: `project=${ENDPOINT_ID}`,
    },
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true
        }
    },
    logging:false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});

  