const router = require('express').Router();
const {Finance} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',withAuth, (Req,res) => {
    Finance.findAll()
    .then(dbIncomeData => res.json(dbIncomeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})