// = = = = = = = = = = = = = = = = = =
// EJERCICIO 3 - SUMAR 4 VALORES Y RESTAR EL ULTIMO
// LEER 4 VALORES, SUMARLOS Y A LA SUMA RESTARLE EL ULTIMO VALOR
// = = = = = = = = = = = = = = = = = =

//Buscamos n el html los 4 inputs y la caja del resultados (por su ID).
const inputPrimero = document.getElementById("primerValor");
const inputSegundo = document.getElementById("segundoValor");
const inputTercero = document.getElementById("tercerValor");
const inputCuarto = document.getElementById("cuartoValor");
const cajaresultado = document.getElementById("resultado");

function calcular() {
  //si falta algun valor no se calcula
  if (
    inputPrimero.value === "" ||
    inputSegundo.value === "" ||
    inputTercero.value === "" ||
    inputCuarto.value === ""
  ) {
    cajaresultado.textContent = "Escribe los 4 valores";
    return;
  }

  //Lo que se escribe en un input es texto : Number () lo convierte en numero.
  const primerValor = Number(inputPrimero.value);
  const segundoValor = Number(inputSegundo.value);
  const tercerValor = Number(inputTercero.value);
  const cuartoValor = Number(inputCuarto.value);

  //sumar los 4 valores CuartoValor;
  const sumavalores = primerValor + segundoValor + tercerValor + cuartoValor;

  //a la suma total se le restar el cuarto valor
  const resultadoresta = sumavalores - cuartoValor;

  //mostrar los resultados en la pagina
  cajaresultado.innerHTML =
    "Suma de los 4 valores:<b>" +
    sumavalores +"</b><br>" +
    "suma meno el cuarto valor: <b>" +
    resultadoresta +"</b>";
}

//Cada vez que se escribe e cualquiera de los inputs, se vuelve a calcular
inputPrimero.addEventListener("input", calcular);
inputSegundo.addEventListener("input", calcular);
inputTercero.addEventListener("input", calcular);
inputCuarto.addEventListener("input", calcular);
