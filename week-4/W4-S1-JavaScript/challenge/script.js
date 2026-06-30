function calculate(a, b = 1, operation = "add") {
  if (isNaN(a)) {
    return "A not a Number!";
  }

  if (isNaN(b)) {
    return "B not a Number!";
  }

  return a * b;


switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
    return "Invalid operation!";
}
}

let result = calculate(1, 17, "add");
 result = calculate(1, 17, "subtract");
 result = calculate(1, 17, "multiply");
 result = calculate(1, 17, "divide");

console.log("The result is: " + result);