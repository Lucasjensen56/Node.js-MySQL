
CREATE DATABASE bamazon;

USE bamazon;


CREATE TABLE products(
id INT AUTO_INCREMENT,
product_name VARCHAR(40) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (ID)
);

INSERT INTO `products` (`product_name`,`department_name`,`price`, `stock_quantity`) 
VALUES ("iPhone", "Electronics","900.00", '100');
INSERT INTO `products` (`product_name`,`department_name`,`price`, `stock_quantity`) 
VALUES ("Macbook Pro", "Electronics","1399.00", '50');
INSERT INTO `products` (`product_name`,`department_name`,`price`, `stock_quantity`) 
VALUES ("Apple Watch", "Electronics","325.00", '10');
INSERT INTO `products` (`product_name`,`department_name`,`price`, `stock_quantity`) 
VALUES ("Power Cord", "Electronics","50.00", '5');
INSERT INTO `products` (`product_name`,`department_name`,`price`, `stock_quantity`) 
VALUES ( "iMac", "Electronics","1800.00", '2');
INSERT INTO `products` (`product_name`,`department_name`,`price`, `stock_quantity`) 
VALUES ( "Protein Powder", "Health and Fitness","31.00", '20');
INSERT INTO `products` (`product_name`,`department_name`,`price`, `stock_quantity`) 
VALUES ( "Pre-Workout", "Health and Fitness","20.00", '100');
INSERT INTO `products` (`product_name`,`department_name`,`price`, `stock_quantity`) 
VALUES ( "Men's Shorts", "Health and Fitness","30.00", '200');
INSERT INTO `products` (`product_name`,`department_name`,`price`, `stock_quantity`) 
VALUES ( "Tank Top", "Health and Fitness","10.00", '34');
INSERT INTO `products` (`product_name`,`department_name`,`price`, `stock_quantity`) 
VALUES ( "Running Shoes", "Health and Fitness","79.00", '10');
INSERT INTO `products` (`product_name`,`department_name`,`price`, `stock_quantity`) 
VALUES ( "Protein bar", "Health and Fitness","1.99", '5');

