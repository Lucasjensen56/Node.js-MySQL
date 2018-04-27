
var inquirer = require("requirer");

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
