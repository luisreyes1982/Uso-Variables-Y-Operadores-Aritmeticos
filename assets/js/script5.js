/* Requerimiento 5 */

/* Solicitamos al usuario ingresar 5 numeros */
var nota1 = prompt("Ingresa Primer Numero");
var nota2 = prompt("Ingresa Segundo Numero");
var nota3 = prompt("Ingresa Tercer Numero");
var nota4 = prompt("Ingresa Cuarto Numero");
var nota5 = prompt("Ingresa Quinto Numero");

/* Creamos la constante de la cantidad de numeros ingresados */
const promedio = 5

/* Creamos nuevas variables convirtiendo en numero las variables anteriores nota1 a la nota5 */
var digito1 = parseInt(nota1);
var digito2 = parseInt(nota2);
var digito3 = parseInt(nota3);
var digito4 = parseInt(nota4);
var digito5 = parseInt(nota5);

/* Se crea variable con la suma de los datos ingresados por el usuario */
var digito6 = (digito1 + digito2 + digito3 + digito4 + digito5);

/* Mensaje de Resultado de Suma y Promedio en el navegador */
document.write("La Suma de todo es: " + digito6 + " El Promedio es: " + digito6 / promedio);