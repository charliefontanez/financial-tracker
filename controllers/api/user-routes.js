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

router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }});
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
    req.session.user_id = JSON.stringify(dbUserData.id)
     res.json({user: dbUserData,message: `You are now logged in as ${dbUserData.username}`})
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

router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
module.exports = router;