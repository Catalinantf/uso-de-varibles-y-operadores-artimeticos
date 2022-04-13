let n1= +prompt ("Ingrese un número entero mayor a 0: ");
let n2= +prompt ("Ingrese un número entero mayor a 0 y distinto del anterior: ");
let suma = n1 + n2
let resta = n1 - n2
let multiplicacion = n1 * n2
let division = n1 / n2
let modulo = n1 % n2

document.write (" La suma de "+n1+" más "+n2 +" es igual a "+suma+ '<br>');
document.write ("La resta de "+n1+" menos "+n2+" es igual a "+ resta +'<br>');
document.write ("La multiplicación de "+n1+" por "+ n2 +" es igual a "+ multiplicacion +'<br>');
document.write ("La división de "+n1+ " partido en "+ n2 +" es igual a "+ division +'<br>');
document.write ("El módulo o resto de la divisón de "+n1+" partido en "+ n2 +" es igual a "+ modulo +'<br>');

