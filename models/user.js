const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const userSchema = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "users", timestamps: false }
);

module.exports = userSchema;
