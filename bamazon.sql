DROP DATABASE IF EXISTS Bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products ( 
item_id INT(10) AUTO_INCREMENT,
product_name VARCHAR(200) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(50) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES ("Sharpty White Hangers Plastic for Adults, Clothing Hangers Pack of 60","home",19.99, 399);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES ("Cactus Lamp Table Lamp Home Decoration Cactus Decor Simple Design Desk Lamp for Living Room Bedroom,with Bulb (Five String, Vintage Brown)","home",39.99,128);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES ("Greenco 5 Tier Wall Mount Corner Shelves Espresso Finish","home",26.99,384);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES ("The Bloom Times Fake Plant for Bathroom/Home Decor, Small Artificial Faux Greenery for House Decorations (Potted Plants)","home",13.99,31);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES ("Homesick Scented Candle, Mexico","decour",29.95,374);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES ("Concepts Big Home Wall Clock Big Roman Numerals Dark Wood Metal Dials Stunning Decor Features 28''","decour",79.00,39);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES ("Hefty Party On Plastic Party Cups (Assorted Colors - Amethyst, Neptune Blue, Paprika, and Apple Green - 16 Ounce, 100 Count)","kitchen",6.69,50);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES ("Joopin Semi Rimless Polarized Sunglasses Women Men Retro Brand Sun Glasses", "fashion",10.99, 74);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES ("Joopin Semi Rimless Polarized Sunglasses Women Men Retro Brand Sun Glasses","fashion", 44.00, 10);
INSERT INTO Products(product_name, department_name, price, stock_quantity) VALUES ("Hotel Luxury Bed Sheets Set TODAY! On Amazon Softest Bedding 1800 Series Platinum Collection-100%!Deep Pocket,Wrinkle & Fade Resistant (Full,Brown)","decour",21.99,60);