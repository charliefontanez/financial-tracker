const userRoutes = require('./user-routes');
const financeRoutes = require('./finance-route');
const incomeRoutes = require('./income-routes');
const expenseRoutes = require('./expense-route');
const router = require('express').Router();

router.use('/user',userRoutes);
router.use('/finance',financeRoutes);
router.use('/income', incomeRoutes);
router.use('/expense', expenseRoutes);
module.exports = router;