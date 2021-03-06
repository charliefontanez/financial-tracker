
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Income extends Model {}


Income.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    income:{
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate:{
          isDecimal: true,     
        }
      },
      finance_id:{
        type: DataTypes.INTEGER,
      reference:{
          model: 'finance',
          key: 'id'
      }
      },
     user_id:{
         type: DataTypes.INTEGER,
         allowNull: false,
       reference:{
           model: 'user',
           key: 'id'
       }
     }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'income',
  }
);

module.exports = Income;
