/* Requerimiento 3 */

/* Solicitamos al Usuario ingresar Temperatura en Celsius */
var temp = prompt("Ingresa Una Temperatura en Grados Celsius");

/* Creamos nuevas variables convirtiendo en numero las variable anterior temp */
var temperatura = parseInt(temp)

/* Constante de Valor de 0 Grados Celsius en Kelvin Formula 0​°C + ​273.15​ = ​273.15​ K */
const kelvin = 273.15

/* Constantes de Valor de 0 Grados Celsius en Fahrenheit Formula (0°C ×​ 9​ /​ 5) +​ 32 =​ 32°F */
const fahren1 = 1.8
const fahren2 = 32

/* Creamos nueva variables convirtiendo en numero la constante anterior fahren2 */
var fahren3 = parseInt(fahren2)

/* Creamos variable con la formula de grados celcius a fahrenheit */
var fahren4 = (temperatura * fahren1) + fahren3

/* Mensaje de Resultado en Grados Kelvin en el navegador */
document.write("La Temperatura en Grados Kelvin es de: ");
document.write(temperatura + kelvin + " ");

/* Mensaje de Resultado en Grados Fahrenheit en el navegador */
document.write("La Temperatura en Grados Fahrenheit es de: " + fahren4);
