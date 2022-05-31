const router = require('express').Router();
const {Finance} = require('../../models');
//const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Finance.findAll({
        where: {
          user_id: 1
        },
       
            attributes: ['id', 'income', 'expense']
          
      }).then(data=>res.json(data))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
 Finance.findOne({
        where: {
            id: req.params.id
        },
       
            attributes: ['id', 'income', 'expense']
          
      }).then(data=>res.json(data))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //router.post('/finance', withAuth, (req, res) => {
///Finance.create({
 //       income: req.body.income,
 //       expences: req.body.expences,
  //      user_id : req.session.user_id
  //    })
  //});

module.exports = router;