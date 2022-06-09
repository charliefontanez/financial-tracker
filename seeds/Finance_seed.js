const {User,Finance,Income,Expense} = require('../models');
const sequelize = require('../config/connection');

const financedata =[
    {
      user_id: 1,
    }
  ]
  const incomeData =[
      {
          name: 'salary1',
          income: 9.2,
          finance_id:1,
          user_id:1
      }
  ]
  const expenseData =[
    {
        name: 'gas1',
        expense: 9,
        finance_id:1,
        user_id:1
    }
]

  const seedFinance = async() =>{
    await Finance.bulkCreate(financedata);
    await Income.bulkCreate(incomeData);
    await Expense.bulkCreate(expenseData);
  }
  module.exports = seedFinance