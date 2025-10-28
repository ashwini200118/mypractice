// arithmetic.js
function calculate() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);

  var add = num1 + num2;
  var sub = num1 - num2;
  var mul = num1 * num2;
  var div = num1 / num2;

  document.getElementById("result").innerHTML =
    "Addition: " + add + "<br>" +
    "Subtraction: " + sub + "<br>" +
    "Multiplication: " + mul + "<br>" +
    "Division: " + div;
}
