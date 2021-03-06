const User = require('./User');
const Finance = require('./Finance');
const Income = require('./Income');
const Expense = require('./Expense')

//finance
Finance.belongsTo(User,{
  foreignKey: 'user_id'
});

User.hasMany(Finance,{
  //as:'finance',
  foreignKey: 'user_id'
});

//income
Income.belongsTo(Finance,{
  foreignKey: 'finance_id'
});
Finance.hasMany(Income,{
  foreignKey: 'finance_id'
})
User.hasMany(Income, {
  foreignKey: 'user_id'
})
Income.belongsTo(User, {
  foreignKey:'user_id'
})
//expense
Expense.belongsTo(Finance,{
  foreignKey: 'finance_id'
});
Finance.hasMany(Expense,{
  foreignKey: 'finance_id'
})
User.hasMany(Expense, {
  foreignKey: 'user_id'
})
Expense.belongsTo(User, {
  foreignKey:'user_id'
})
module.exports = {
  User,
  Finance,
  Income,
  Expense
};
