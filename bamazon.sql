
CREATE DATABASE bamazon;

USE bamazon;


CREATE TABLE products
(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
item_id INT NOT NULL,
product_name VARCHAR(40) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (ID)
);

INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "iPhone", "Electronics","900.00", '100');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "Macbook Pro", "Electronics","1399.00", '50');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "Apple Watch", "Electronics","325.00", '10');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "Power Cord", "Electronics","50.00", '5');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "iMac", "Electronics","1800.00", '2');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "Protein Powder", "Health and Fitness","31.00", '20');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "Pre-Workout", "Health and Fitness","20.00", '100');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "Men's Shorts", "Health and Fitness","30.00", '200');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "Tank Top", "Health and Fitness","10.00", '34');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "Running Shoes", "Health and Fitness","79.00", '10');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "Protein bar", "Health and Fitness","1.99", '5');

