var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  
  user: "root",
  
  pasword: "Volund56",
  database: "bamazon"
  
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("connection as id " + connection.threadId);
  connection.end();
});

// function afterConnection() {
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err:
//     console.log(res);
//     connection.end();
//   });
  
// };



function start() {
  
  inquirer
    .prompt({
      name: "buyOrNot",
      type: "confirm",
      message: "Would you like to buy a product from bamazon?"
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer === true) {
        buyProducts();
      }
      else {
        console.log("Thank you for your business. Try again later");
      }
    });
};
    
    
    
function buyProducts() {
  
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    
       inquirer.prompt([
          {
            type: "rawlist",
            name: "product_ID",
            choices: function () {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].item_id); 
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
      ])
      .then(function(answer) {
         var chosenItem;
         for (var i = 0; i < results.length; i++) {
           if (results[i].item_id === answer.choice) {
             chosenItem = results[i];
         }
      } 
         
// see if  
         
      if (chosenItem.stock_quantity < parseInt(answer.qtyPurchased)) {
        connection.query(
          "UPDATE auctions SET ? WHERE ?",
          [
            {
              stock_quantity: qtyPurchased
            }.
            {
            id: chosenItem.id
            }
          ],
          function(error) {
            if (error) throw err;
            console.log("Order place. Stock updated");
            start();
          }
        );
      }
        else {
          console.log("There is not enough stock for you to place this item");
          start();
        };
  
       
       
       }     
 }
    
    


