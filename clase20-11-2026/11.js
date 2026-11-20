let a, b;
a = 20;
b = 30;

console.log(a == b); // false
console.log(a < b); // true
console.log(a > b); // false

let pais, edad;
pais = prompt("¿De que pais eres?");
edad = prompt("¿De edad tienes?");

if (pais == "colombia" && edad >= 18) {
  document.writeln("eres ciudadano del pais de :", pais);
} else {
  document.writeln(
    "no eres ciudadano del pais de colombia o no eres mayor de edad",
  );
}
//el operador || (or) se utiliza para evaluar si al menos una de las condiciones es vedadero.Si alguna de las condiciones es verdadera si el resultado sera verdadero: 
let day, month, year;
day = prompt("ingrese el dia (1-31):");
month = prompt("ingrese el mes (1-12):");
year = prompt("ingrese el año (por ejemplo, 2023):");
//convetir los valores ingresados a numeros
day = parseInt(day);
month = parseInt(month);
year = parseInt(year);
// validar si el dia, mes y año son validos
if (isNaN(day) || isNaN(month) || isNaN(year)) {
  document.writeln("ingrese solo numeros");
} else if (month == 1 || month == 2 || month == 3) {
  document.writeln("pertenece al primer codigo del año");
} else document.writeln("no pertenece al primer trimeste de este año");

