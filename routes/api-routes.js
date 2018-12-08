const models = require('../models');
const path = require('path');

module.exports = function (app) {

  app.get('/api/bamazon', function (req, res) {
    models.Product.findAll({}).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    })
  });


  app.post('/api/bamazon', function (req, res) {
    models.Product.create(req.body).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    })
  })
  app.put('/api/bamazon/:id', function (req, res) {
    req.body.quantity = parseInt(req.body.quantity);
    models.Product.update(
      {
        stock_quantity: req.body.quantity
      },
      {
        where: {
          id: req.params.id
        }
      }).then(function () {
        models.Product.findAll({}).then(function (response) {
          res.json(response);
        })
      });
  });

}