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

router.delete('/:id', (req, res) => {
    Expense.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbExpenseData => {
        if (!dbExpenseData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbExpenseData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.put('/:id', (req,res) => {
    Expense.update(
    {
        name: req.body.name,
        expense: req.body.parsed.expense
    },
    {
        where: {
            id: req.params.id
        }
    }
    ) .then(updatedExpenseData => {
        if (!updatedExpenseData) {
        //   res.status(404).json({ message: 'could not update Expense Data' });
          return;
        }
        res.json(updatedExpenseData);
        // res.json(req.body);
      })
      .catch(err => {
        console.log(err);
        // res.status(500).json(err);
      });
    console.log(req.body)
  });

  module.exports = router