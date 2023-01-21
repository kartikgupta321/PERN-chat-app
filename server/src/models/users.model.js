const Sequelize = require('sequelize');
const db = require('../config/database.js');

const user = db.define("users", {
      name:{
        type:Sequelize.STRING,
        allowNull : false
      },
      email:{
        type:Sequelize.STRING,
        allowNull : false,
        unique : true,
        isEmail : true
      },
      password:{
        type:Sequelize.STRING,
        allowNull : false
      },
      phoneNumber:{
        type:Sequelize.STRING,
        allowNull : false
      },
      deletedAt:{
        type:"TIMESTAMP"
      }
    });

await user.sync();

module.exports = user;