let dias = +prompt("Ingrese una cantidad de días: ");

function getFloor(x) {
    return Math.floor(x);
}
let years = dias / 365;
let weeks = (years - getFloor(years)) * 12 * 4;
let days = (weeks - getFloor(weeks)) * 7;


document.write("El resultado es " + Math.floor(years) + " año(s), " + Math.floor(weeks) + " semana(s) y " + Math.floor(days) + " día(s).")


