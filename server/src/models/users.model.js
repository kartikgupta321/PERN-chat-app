const Sequelize = require('sequelize');
const db = require('../config/database.js');

const user = db.define("users", {
      name:{
        type:Sequelize.STRING
      },
      email:{
        type:Sequelize.STRING
      },
      password:{
        type:Sequelize.STRING
      },
      phoneNumber:{
        type:Sequelize.STRING
      },
      deletedAt:{
        type:"TIMESTAMP"
      }
    });

module.exports = user;