const router = require('express').Router();
const res = require('express/lib/response');
const {Income} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req,res) => {
    Income.findAll({
        where: {
            id: req.session.user_id
        }
    })
    .then(dbIncomeData => res.json(dbIncomeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

router.post('/', (req,res) => {
    Income.create({
        name: req.body.name,
        income: req.body.income,
        finance_id: req.body.finance_id,
        user_id: req.session.user_id
    })
    .then(newIncomeData => res.json(newIncomeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
module.exports = router