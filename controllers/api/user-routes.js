const router = require('express').Router();

router.get('/login', (req,res) => {
    try {
        console.info(req.body)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;