var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Volund56",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();  
});

function start() {
  inquirer
    .prompt({
      name: "buyOrNot",
      type: "confirm",
      message: "Would you like to buy a product from bamazon?",
      default: true
    })
    .then(function(answer) {
      if (answer.buyOrNot === true) {
        buyProducts();
      }
      else {
        console.log("Thank you for your business. Try again later");
      }
    });
};
    

function showItems() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res)
  })
};

function buyProducts() {
  connection.query("SELECT * FROM products", function(err, results) {
    inquirer.prompt([
          {
            type: "list",
            name: "product_ID",
            choices: function () {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name);    
              }
              return choiceArray;
            },
            message: "What is the product ID you woud like to buy?"
        },
        {
          type: "input",
          name: "qtyPurchased",
          message: "How many would you like to buy?"
        }
      ]).then(function(answer) {
        var chosenItem = answer.product_ID;
        var qtyWanted = answer.qtyPurchased;
        checkInvetory(chosenItem, qtyWanted);
      });
  });
};


function checkInvetory(choiceProduct, qtyToBuy) {
   connection.query(`SELECT * FROM products WHERE product_name='${choiceProduct}'`, function (err, results) {
      if (err) throw err;
      for (var i = 0; i < results.length; i++) {
            var itemStock = results[i].stock_quantity;
            var itemPrice = results[i].price;
              }

      var updatedStock = itemStock - qtyToBuy;

      if (qtyToBuy <= itemStock) {
        console.log("We have this in stock. There are " + updatedStock + " remaining")
            var query = connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: updatedStock
              },
              {
              product_name: choiceProduct
              }
            ],
            function(error, res) {
              if (error) throw err;
              console.log("Order placed. Stock updated");
              console.log("Your total was  $" + itemPrice + ".00")
              start();

            }
          );

        }
      else {
          console.log("We don't have this in stock")
          start()
      }   
    });

};

