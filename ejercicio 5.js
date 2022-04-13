let num1 = +prompt ("ingresa un primer número (1/5)");
let num2 = +prompt ("ingresa un segundo número (2/5)");
let num3 = +prompt ("ingresa un tercer número (3/5)");
let num4 = +prompt ("ingresa un cuarto número (5/5)");
let num5 = +prompt ("ingresa un quinto número (5/5)");

let suma= num1 + num2 + num3 + num4 + num5 ;
let promedio= (num1 + num2 + num3 + num4 + num5 )/5;

console.log= suma;

document.write ("Ingresaste los siguientes números: " +num1+ ", "+num2+ ", "+num3+ ", "+num4+ ", "+num5+ "<br>");
document.write ("La suma de tus números es: " +suma+ "<br>");
document.write ("El promedio de tus números es: " +promedio+ "<br>");
