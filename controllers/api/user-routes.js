const User = require('../../models/User');

const router = require('express').Router();

router.post('/login', (req,res) => {
    // const login = require('../../public/js/login')
    try {
        console.log(req.body)
    } catch (err) {
        console.log(err)
    }
    // res.json(req)
})


router.post('/', (req,res) => {
    
    console.info(req.body);

        User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        }).then(dbUserData=> {
            console.info(dbUserData);
            
        })
        .catch(err => {
            console.log(err)
            
        })
    
        res.end();
        
      
})
module.exports = router;