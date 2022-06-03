const {User,Finance,Income,Expense} = require('../models');
const sequelize = require('../config/connection');

const financedata =[
    {
      income:10,
      expense:9,
      user_id: 1,
    },
    {
      income:11,
      expense:10,
      user_id: 2,
    }
  ]
  const incomeData =[
      {
          name: 'salary',
          income: 9.1,
          finance_id:1

      }
  ]
  const expenseData =[
    {
        name: 'gas',
        expense: 8,
        finance_id:1

    }
]

  const seedFinance = async() =>{
    await Finance.bulkCreate(financedata);
    await Income.bulkCreate(incomeData);
    await Expense.bulkCreate(expenseData);
  }
  module.exports = seedFinance