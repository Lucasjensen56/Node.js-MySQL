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
  start()
  // connection.end();

  
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
      // based on their answer, either call the bid or the post functions
      if (answer.buyOrNot === true) {
       checkInvetory("iPhone");
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

    console.log(results[0].stock_quantity);

    inquirer.prompt([
          {
            type: "list",
            name: "product_ID",
            // choices: ["a", "b"],
            choices: function () {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name); 
              }
              return choiceArray;

            },
            // choices: choiceArray,
            message: "What is the product ID you woud like to buy?"
        },
        {
          type: "input",
          name: "qtyPurchased",
          message: "How many would you like to buy?"
        }
      ]).then(function(answer) {
        console.log(answer)

        console.log(parseInt(answer.qtyPurchased));

        console.log(answer.product_ID);

        // var chosenItem = answer.product_ID;

        // console.log(answer[0].stock_quantity)

        // console.log(stock_quantity)


         var chosenItem

         for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === answer.qtyPurchased) {
              console("this worked ")
             chosenItem = results[i];
            }
            else {
              console.log("this didn't work")
            }
          }


        if (chosenItem.stock_quantity < parseInt(answer.qtyPurchased)) {
          console.log("We have this in stock")
        }
        else {
          console.log("We don't have this in stock")
        }



      });
  });
};

function checkInvetory(choiceID) {
  // check innentory to to make sure that the item you chose to have in stock. Can call the function each time
   connection.query("SELECT * FROM products", function (err, results) {
      if (err) throw err;
      console.log(results)
      for (var i = 0; i < results.length; i++) {
              console.log(results[i].stock_quantity)
                // choiceArray.push(results[i].product_name); 
              }
        
    });

};


// if (chosenItem.stock_quantity < parseInt(answer.qtyPurchased)) {
// //         connection.query(
// //           "UPDATE auctions SET ? WHERE ?",
// //           [
// //             {
// //               stock_quantity: qtyPurchased
// //             },
// //             {
// //             id: chosenItem.id
// //             }
// //           ],
// //           function(error) {
// //             if (error) throw err;
// //             console.log("Order place. Stock updated");
// //             start();
// //           }
// //         );
// //       }
// //         else {
// //           console.log("There is not enough stock for you to place this item");
// //           start();
// //         };


    
    
// function buyProducts1() {
  
//   connection.query("SELECT * FROM products", function(err, results) {
//     // if (err) throw err;

//     // console.log(err)
//              // var choiceArray = [];
//              //  for (var i = 0; i < results.length; i++) {
//              //    choiceArray.push(results[i].id.toString()); 
//              //  }
//              //  console.log(choiceArray)


//        inquirer.prompt([
//           {
//             type: "list",
//             name: "product_ID",
//             choices: ["a", "b"],
//             choices: function () {
//               var choiceArray = [];
//               for (var i = 0; i < results.length; i++) {
//                 choiceArray.push(results[i].product_name); 
//               }
//               return choiceArray;
//             },
//             // choices: choiceArray,
//             message: "What is the product ID you woud like to buy?"
//         },
//         {
//           type: "input",
//           name: "qtyPurchased",
//           message: "How many would you like to buy?"
//         }
//       ])
      // .then(function(answer) {
      //    var chosenItem;
      //    for (var i = 0; i < results.length; i++) {
      //       if (results[i].product_name === answer.choice) {
      //        chosenItem = results[i];
      //       }
      //     }


         
// // // see if  
         
// //       if (chosenItem.stock_quantity < parseInt(answer.qtyPurchased)) {
// //         connection.query(
// //           "UPDATE auctions SET ? WHERE ?",
// //           [
// //             {
// //               stock_quantity: qtyPurchased
// //             },
// //             {
// //             id: chosenItem.id
// //             }
// //           ],
// //           function(error) {
// //             if (error) throw err;
// //             console.log("Order place. Stock updated");
// //             start();
// //           }
// //         );
// //       }
// //         else {
// //           console.log("There is not enough stock for you to place this item");
// //           start();
// //         };
  
// // //     });
//   });     
// }





    
    


