const userRoutes = require('./user-routes');
const financeRoutes = require('./finance-route')
const router = require('express').Router();

router.use('/user',userRoutes)
router.use('/finance',financeRoutes)
module.exports = router;