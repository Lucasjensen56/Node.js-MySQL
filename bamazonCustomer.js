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

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err:
    console.log(res);
    connection.end();
  });
  
};



function start() {
  
  
};
    
    
    
function buyProduct() {
  
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    
       inquirer.prompt([
          {
            type: "rawlist",
            name: "product_ID",
            choices: function () {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].
                
              };



          },
          message: "What is the product ID you woud like to buy?"
        },
  }     
 }
    
    


