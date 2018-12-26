const db = require('../models');

const items = [
  {
    product_name: "Marvel's Spider-Man",
    department_name: "Video Games",
    price: 59.95,
    stock_quantity: 150
    }, 
  {
    product_name: "Call of Duty Black Ops 4",
    department_name: "Video Games",
    price: 59.99,
    stock_quantity: 200
    }, 
  {
    product_name: "Pack of Gatorade",
    department_name: "Food and Drink",
    price: 10.00,
    stock_quantity: 50
    }, 
  {
    product_name: "Air Jordan V",
    department_name: "Apparel",
    price: 120.00,
    stock_quantity: 70
    }, 
  {
    product_name: "Hoodie (Blue, Red, White)",
    department_name: "Apparel",
    price: 25.00,
    stock_quantity: 35
    }, 
  {
    product_name: "Flashlight",
    department_name: "Necessities",
    price: 20.00,
    stock_quantity: 17
    }, 
  {
    product_name: "The Avengers",
    department_name: "Films",
    price: 15.00,
    stock_quantity: 25
    }, 
  {
    product_name: "The GodFather Trilogy",
    department_name: "Films",
    price: 70.00,
    stock_quantity: 57
    }, 
  {
    product_name: "Chicken Breasts",
    department_name: "Food and Drink",
    price: 25.00,
    stock_quantity: 75
    }, 
  {
    product_name: "Chess",
    department_name: "Board Games",
    price: 19.95,
    stock_quantity: 23
    }
  ];

  db.sequelize.sync({force: false}).then(function() {
    db.Product.bulkCreate(items).then(function(rows) {
      console.log('\n\nINSERTED\n\n');
    }).catch(function(err) {
      console.log('\n\nError:', err);
    });
  });
  


