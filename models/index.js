const User = require('./User');
const Finance = require('./Finance');


Finance.belongsTo(User,{
  foreignKey: 'user_id'
});

User.hasMany(Finance,{
  //as:'finance',
  foreignKey: 'user_id'
});

module.exports = {
  User,
  Finance
};
