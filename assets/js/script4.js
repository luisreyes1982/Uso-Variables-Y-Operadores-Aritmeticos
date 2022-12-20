/* Requerimiento 4 */

/* Solicitamos al usuario ingresar numero de dias */
var datouser = prompt("Ingresa Numero de Dias");

/* Creamos Constantes de año, meses y dias */
const year = 365
const week = 7

/* Formula de dias a año, semanas y dias */
var years = datouser / year
var difyear = datouser % year
var weeks = difyear / week
var difweeks = difyear % week
var days = difweeks

/* Mensaje de Resultado en el navegador */
document.write("Los " + datouser + " Dias Ingresados Representan " + Math.floor(years) +
    " Año(s), " + Math.floor(weeks) + " Semana(s) y " + Math.floor(days) + " Dia(s)")