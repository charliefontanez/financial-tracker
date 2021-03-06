const router = require('express').Router();
const {Income} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req,res) => {
    Income.findAll({
        where: {
            user_id: req.session.user_id
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

router.delete('/:id', (req, res) => {
    Income.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbIncomeData => {
        if (!dbIncomeData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbIncomeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.put('/:id', (req,res) => {
    Income.update(
    {
        name: req.body.name,
        income: req.body.parsed.income
    },
    {
        where: {
            id: req.params.id
        }
    }
    ) .then(updatedIncomeData => {
        if (!updatedIncomeData) {
        //   res.status(404).json({ message: 'could not update Income Data' });
          return;
        }
        res.json(updatedIncomeData);
        // res.json(req.body);
      })
      .catch(err => {
        console.log(err);
        // res.status(500).json(err);
      });
    console.log(req.body)
  });

module.exports = router