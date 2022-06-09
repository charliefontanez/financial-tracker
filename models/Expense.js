
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Expense extends Model {}


Expense.init(
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
      expense:{
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
    modelName: 'expense',
  }
);

module.exports = Expense;
