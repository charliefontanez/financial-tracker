const router = require('express').Router();

router.get('/login', (req,res) => {
    // const login = require('../../public/js/login')
    try {
        console.log(req.body)
        console.log(this)
    } catch (err) {
        console.log(err)
    }
    // res.json(req)
})

module.exports = router;