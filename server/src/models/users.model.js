const Sequelize = require('sequelize');
const db = require('../config/database.js');

const users = (sequelize, Sequelize) => {
    const users = sequelize.define("tutorial", {
      name:{
        type:Sequelize.STRING
      },
      email:{
        type:Sequelize.STRING
      },
      password:{
        type:Sequelize.STRING
      },
      phoneNo:{
        type:Sequelize.STRING
      },
      deletedAt:{
        type:"TIMESTAMP"
      }
    });
};

// users.sync().then(() => {
//   console.log('table created');
// });
module.exports = users;