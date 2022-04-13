let tcelsius= +prompt ("Ingrese temperatura en grados Celsius (Cº): ");

let tkelvin = tcelsius + 273.15;
let tfahrenheit = (tcelsius * 9/5)+32;

document.write ("Conversión de Temperaturas <br>");
document.write (tcelsius+ "ºC"+ "<br>");
document.write (tkelvin+ "K"+ "<br>");
document.write (tfahrenheit+ " ºF ");

