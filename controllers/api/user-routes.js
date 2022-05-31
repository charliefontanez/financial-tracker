const User = require('../../models/User');

const router = require('express').Router();

router.get('/', (req,res) => {
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.json(err);
    })
})

router.post('/', (req,res) => {
    User.create({
     username: req.body.username,
     email: req.body.email,
     password: req.body.password   
    }).then(newUserData => res.json(newUserData))
    .catch(err => {
        console.log(err);
        res.json(err)
    })
})
router.post('/login',async (req,res) => {
    try {
    const dbUserData = await User.findOne({
        where:{
            email: req.body.email
        }
    });
    if (!dbUserData) {
        res.json({message: 'Incorrect email or password'})
    }
    const validPassword = await dbUserData.checkPassword(req.body.password)
    
    if (!validPassword) {
        res.json({message: 'Incorrect email or password'})
    }
    if (validPassword){
     req.session.save(() => {
    req.session.loggedIn = true
     res
     
    .json({user: dbUserData,message: 'You are now logged in'})
    });

        }
}
    catch(err) {
        console.log(err);
        res.json(err);
    }
})


router.post('/logout', (req,res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.end();
        });
    } else{
        res.end();
    }
})
module.exports = router;