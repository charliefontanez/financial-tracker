const User = require('./User');
const Finance = require('./Finance');


Finance.belongsTo(User,{
  foreignKey: 'user_id'
});

User.hasMany(Finance)

module.exports = {
  User,
  Finance
};
