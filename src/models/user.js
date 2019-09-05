import { Sequelize } from "./index";

const user = (sequelize, DataTypes) => {
  const User = sequelize.define(
  "user",
  {
  username: {
  type: Sequelize.STRING,
  unique: true
  },
  password: {
  type: Sequelize.STRING
  },
  birthday: {
  type: Sequelize.DATE
  }
  },
  { schema: "vaga_educacao" }
  );
  
  return User;
  };
  
  export default user;