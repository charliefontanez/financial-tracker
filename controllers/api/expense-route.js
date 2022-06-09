const router = require('express').Router();
const {Expense} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req,res) => {
    Expense.findAll()
    .then(dbExpenseData => res.json(dbExpenseData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

router.post('/', (req,res) => {
    Expense.create({
        name: req.body.name,
        expense: req.body.expense,
        finance_id: req.body.finance_id,
        user_id: req.session.user_id
    })
    .then(newExpenseData => res.json(newExpenseData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
module.exports = router