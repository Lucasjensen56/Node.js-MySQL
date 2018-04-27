var mysql = require("mysql");

var inquirer = require("requirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  
  user: "????",
  
  pasword: "",
  database: "bamazon"
  
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("connection as id " + connection.threadId);
  connection.end();
});




inquirer.prompt([
  
  {
    type: "input",
    name: "product_ID",
    message: "What is the product ID you woud like to buy?"
  },
  
  {
    type: "input",
    name: "Number of product to buy?",
    message: "How many would you like to buy?"
  },
  
  ]).then(function(user) {
  
  
  
  
});
