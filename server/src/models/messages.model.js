const Sequelize = require('sequelize');
const db = require('../config/database.js');

const message = db.define("messages", {
      message:{
        type:Sequelize.STRING,
        allowNull : false
      },
      senderId:{
        type:Sequelize.STRING,
        allowNull : false,
        isEmail : true
      },
      receiverId:{
        type:Sequelize.STRING,
        allowNull : false,
        isEmail : true
      },
      deletedAt:{
        type:"TIMESTAMP"
      }
    });
(async () => {
  await db.sync();
})();

module.exports = message;