module.exports = (sequelize, Sequelize) => {
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
  
    return users;
  };