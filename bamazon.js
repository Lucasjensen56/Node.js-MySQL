
CREATE DATABASE bamazon;


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
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "iPhone", "Electronics","900.00", '100');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "iPhone", "Electronics","900.00", '100');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "iPhone", "Electronics","900.00", '100');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "iPhone", "Electronics","900.00", '100');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "iPhone", "Electronics","900.00", '100');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "iPhone", "Electronics","900.00", '100');
INSERT INTO `products` (`id`,`item_id`,`product_name`,`department_name`,`price`, `stock_quantity`) VALUES (NULL, "iPhone", "Electronics","900.00", '100');


