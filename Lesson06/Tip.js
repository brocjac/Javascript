// input bill amount
var bill = Number(prompt("Enter bill amount"));
// input tip %
var percent = Number(prompt("Enter tip percent"));
// calc tip = bill amount * tip %
var tip = bill * percent;
// output tip
document.writeln("The tip is " + tip);