var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(error) {
  if (error) throw error;
});

function start() {
  connection.query("SELECT * FROM products", function(error, response) {
    if (error) throw error;

    for (var i = 0; i < response.length; i++) {
      console.log("----------");
      console.log("ID: " + response[i].item_id);
      console.log("Product: " + response[i].product_name);
      console.log("Price: " + response[i].price);
      console.log("----------");
    }

    inquirer
      .prompt([
        {
          name: "id",
          type: "input",
          message: "What would you like to buy? Enter the ID: ",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
          name: "units",
          type: "input",
          message: "How many would you like to buy?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        for (var i = 0; i < response.length; i++) {
          if (response[i].item_id === parseInt(answer.id))
            stock(parseInt(answer.id), answer.units);
        }
      });
  });
}

function stock(itemID, units) {
  connection.query(
    "SELECT * FROM products WHERE ?",
    {
      item_id: itemID
    },
    function(error, response) {
      if (error) throw error;

      if (response[0].stock_quantity <= 0) {
        console.log("Insufficient quantity! Choose another amount.");
        restart();
      } else updateQuantity(itemID, units);
    }
  );
}

function cost(itemID, units) {
  connection.query(
    "SELECT * FROM products WHERE ?",
    {
      item_id: itemID
    },
    function(error, response) {
      if (error) throw error;

      var totalCost = response[0].price * units;
      console.log("The total cost is $ " + totalCost);

      restart();
    }
  );
}

function updateQuantity(itemID, units) {
  connection.query(
    "SELECT * FROM products WHERE ?",
    {
      item_id: itemID
    },
    function(error, response) {
      if (error) throw error;

      var newQuantity = response[0].stock_quantity - units;

      if (newQuantity < 0) newQuantity = 0;

      connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: newQuantity
          },
          {
            item_id: itemID
          }
        ],
        function(error, response) {}
      );

      cost(itemID, units);
    }
  );
}

function restart() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to add more items?",
        name: "confirm",
        default: true
      }
    ])
    .then(function(answer) {
      if (answer.confirm) start();
      else {
        connection.end();
      }
    });
}

start();
