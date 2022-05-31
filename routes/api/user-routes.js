const User = require('../../models/User');

const router = require('express').Router();

router.get('/', (req,res) => {
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
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
        res.status(500).json({message: 'Incorrect email or password'})
    }
    const validPassword = await dbUserData.checkPassword(req.body.password)
    
    if (!validPassword) {
        res.status(400).json({message: 'Incorrect email or password'})
    }
    if (validPassword){
     req.session.save(() => {
    req.session.loggedIn = true
     res
     .status(200)
    .json({user: dbUserData,message: 'You are now logged in'})
    });

        }
}
    catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})


router.post('/logout', (req,res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else{
        res.status(404).end();
    }
})
module.exports = router;