// create your coffee object array here

var coffeeOrders = [
  { 
    type: "Latte", 
    milk: true, 
    customer: "Alice",
},
  { 
    type: "Flat White", 
    milk: true, 
    customer: "Bob",
  },
  { 
    type: "Cortado", 
    milk: false, 
    customer: "Charlie",
  }
];

// create your print order function here
function printOrder(coffee) {
  console.log("order: " + coffee.type + ", milk: " + coffee.milk + ", customer: " + coffee.customer);
}

// loop through the coffee orders array here
for (var i = 0; i < coffeeOrders.length; i++) {
  printOrder(coffeeOrders[i]);
}
