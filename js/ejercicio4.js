//Rubén Torres
'use strict'

//Variables
let longitud = 0;
let caracteres = [];
let caracter = '';

do{

    longitud = prompt('Introduce una longitud:');
    if(longitud === '' || isNaN(longitud))
        alert('No se ha introducido un valor correcto.'); 

}while(isNaN(longitud) || longitud === null || longitud === '');

let c=0;
do{

    //Variables Locales
    let repite = false;

    caracter = prompt(`Introduce un carácter número ${c+1} que va a estar prohibido:`);
    if(caracter !== null && caracter !== '' && isNaN(caracter) && caracter.length == 1){
        for(let i=0;i<caracteres.length;i++)
            if(caracter == caracteres[i])
                repite = true;
        if(!repite){
            caracteres[c] = caracter;
            c++;
        }
    }

}while(caracter !== null || caracteres.length<1);

console.log('~~~~~~~~~~~~~ Carácteres Prohibidos ~~~~~~~~~~~~~');
for(let i=0;i<caracteres.length;i++)
    console.log(caracteres[i]);

console.log('~~~~~~~~~~~~~ Array final ~~~~~~~~~~~~~');
let cadenaaleatoria = funcion1(longitud, caracteres);
for(let i=0; i<cadenaaleatoria.length;i++)
    console.log(cadenaaleatoria[i]);

//Funciones
function funcion1(longitud, caracteres) {

    //Variables Locales
    let abecedario = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';
    let straleatoria = [];

    for(let i=0;i<longitud;i++){

        //Variables Locales
        let aleatorio = abecedario.charAt(Math.floor(Math.random() * abecedario.length));
        let repite = false;

        for(let j=0;j<straleatoria.length;j++)
            if(aleatorio === straleatoria[j])
                repite = true;
        for(let j=0;j<caracteres.length;j++)
            if(aleatorio === caracteres[j])
                repite = true;
            
        if(!repite)
            straleatoria[i]=aleatorio;
    }

    return straleatoria;

}