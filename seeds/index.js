const  User = require('../models/User');
const sequelize = require('../config/connection');

const UserData = [
  {
    username: 'asdf',
    email: 'asdf@gmail.com',
    password: '1234'
  },
];
const seed = async() =>{
  await sequelize.sync({ force: true });
  User.bulkCreate(UserData);
}
seed();
