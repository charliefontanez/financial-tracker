const User = require('../models/User');


User.create({
    username: 'Ortaylo',
    email: 'owentaylor60@yahoo.com',
    password: '123456'
}) .then(newUserData => console.log(newUserData))
.catch(err => {
    console.log(err)
});


