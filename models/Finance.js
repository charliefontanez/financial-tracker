
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Finance extends Model {}


Finance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    income:{
        type: DataTypes.DECIMAL,
        reference:{
          model: 'income',
          key: 'id'
        }
      },
      expense:{
        type: DataTypes.DECIMAL,
        reference:{
          model: 'expense',
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
    modelName: 'finance',
  }
);

module.exports = Finance;
