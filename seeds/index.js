const {User,Finance} = require('../models');

const sequelize = require('../config/connection');
const seedFinance = require('./Finance_seed');

const UserData = [
  {
    id: 1,
    username: 'asdf',
    email: 'asdf@gmail.com',
    password: '1234'
  },
  {
    id: 2,
    username: 'asdf',
    email: 'qwer@gmail.com',
    password: '1234'
  },
];


const seed = async() =>{
  await sequelize.sync({ force: true });
 await User.bulkCreate(UserData, {individualHooks: true});
  //Finance[0]
  await seedFinance();
}
seed();
