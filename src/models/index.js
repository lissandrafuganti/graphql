require('dotenv/config');
import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,


  {
    dialect: "postgres",
   
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  }
);

const models = {
  User: sequelize.import("./user")
};

export { sequelize,Sequelize };

export default models;
