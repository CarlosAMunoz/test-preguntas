
let contPregunta = document.getElementById("pregunta");
let contRespuesta1 = document.getElementById("respuesta1");
let contRespuesta2 = document.getElementById("respuesta2");
let contRespuesta3 = document.getElementById("respuesta3");
let contRespuesta4 = document.getElementById("respuesta4");
let botonAcpt = document.getElementById("boton_acept");

let opcion1 = document.getElementById("respuesta1");
let opcion2 = document.getElementById("respuesta2");
let opcion3 = document.getElementById("respuesta3");
let opcion4 = document.getElementById("respuesta4");


botonAcpt.addEventListener("click", elegir_pregunta);

opcion1.addEventListener("click", validar_respuesta1);
opcion2.addEventListener("click", validar_respuesta2);
opcion3.addEventListener("click", validar_respuesta3);
opcion4.addEventListener("click", validar_respuesta4);




/*Se traen los elementos div del html donde imprimiremos
las preguntas y respuestas. */


class Pregunta{
    constructor(num_preg, pregunta, respuestaMala1, respuestaMala2, respuestaMala3, respuestaCorrecta){
        this.num_preg = num_preg
        this.pregunta = pregunta
        this.respuestaMala1 = respuestaMala1
        this. respuestaMala2 = respuestaMala2
        this.respuestaMala3 = respuestaMala3
        this. respuestaCorrecta = respuestaCorrecta
    }

}
/*creamos una clase con el constructor para agregar los 
objetos preguntas */


const p1 = new Pregunta(1,"¿Cuál es la ciudad más poblada del mundo?", "Ciudad de Mexico", "Bogotá", "Sao Paulo", "Tokio");
const p2 = new Pregunta(2,"¿A qué edad murió Abraham Lincoln?", "32", "48", "56", "64");
const p3 = new Pregunta(3,"¿3?", "", "", "", "");
const p4 = new Pregunta(4,"¿4?", "", "", "", "");
const p5 = new Pregunta(5,"¿5?", "", "", "", "");
const p6 = new Pregunta(6,"¿6?", "", "", "", "");
const p7 = new Pregunta(7,"¿7?", "", "", "", "");
const p8 = new Pregunta(8,"¿8?", "", "", "", "");
const p9 = new Pregunta(9,"¿9?", "", "", "", "");
const p10 = new Pregunta(10,"¿10?", "", "", "", "");
//Creamos los objetos (preguntas)

var formuladas = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
var respondido = [];
/*Creamos dos arrays, uno para guardar todas las preguntas formuladas y otro para todas las respondidas. */


//-----Crear opción de saltar pregunta 



function elegir_pregunta(){


    function aleatorio(min, max)
    {
    let resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
    }
    /* Se crea función para crear números aleatorios.
    Esta función la llavamos dos veces, una para la pregunta que saldrá y otra para la posición de la pregunta correcta. */



    //Llamamos al aleatorio con mínimo de 1 y máximo de la longitud del array formuladas. 
    var num_alea = aleatorio(1,formuladas.length);

    switch(num_alea){
        case 1:
            var num_pregunta = p1;
            respondido.push(p1);
            break;
        case 2:
            var num_pregunta = p2;
            respondido.push(p2);
            break;
        case 3:
            var num_pregunta = p3;
            respondido.push(p3);
            break;
        case 4:
            var num_pregunta = p4;
            respondido.push(p4);
            break;
        case 5:
            var num_pregunta = p5;
            respondido.push(p5);
            break;
        case 6:
            var num_pregunta = p6;
            respondido.push(p6);
            break;
        case 7:
            var num_pregunta = p7;
            respondido.push(p7);
            break;
        case 8:
            var num_pregunta = p8;
            respondido.push(p8);
            break;
        case 9:
            var num_pregunta = p9;
            respondido.push(p9);
            break;
        case 10:
            var num_pregunta = p10;
            respondido.push(p10);
            break;
        default: console.log("Ningún dato válido");
    }

        function aleatorio(min, max)
        {
        let resultado;
        resultado = Math.floor(Math.random() * (max - min + 1)) + min;
        return resultado;
        }

        var num_alea2 = aleatorio(1,4);
        //Generamos otro número aleatorio de 1 a 4 para posicionar el lugar de las preguntas. 
    
        preguntar(num_pregunta);
        function preguntar(num_pregunta) {
            switch(num_alea2){
            case 1: 
            contPregunta.textContent =(num_pregunta.pregunta);
            contRespuesta1.textContent =(num_pregunta.respuestaMala1)
            contRespuesta2.textContent =(num_pregunta.respuestaMala2)
            contRespuesta3.textContent =(num_pregunta.respuestaMala3)
            contRespuesta4.textContent =(num_pregunta.respuestaCorrecta)
            break;
            case 2:
            contPregunta.textContent =(num_pregunta.pregunta);
            contRespuesta1.textContent =(num_pregunta.respuestaCorrecta)
            contRespuesta2.textContent =(num_pregunta.respuestaMala2)
            contRespuesta3.textContent =(num_pregunta.respuestaMala3)
            contRespuesta4.textContent =(num_pregunta.respuestaMala1)
            break;
            case 3:
            contPregunta.textContent =(num_pregunta.pregunta);
            contRespuesta1.textContent =(num_pregunta.respuestaMala2)
            contRespuesta2.textContent =(num_pregunta.respuestaCorrecta)
            contRespuesta3.textContent =(num_pregunta.respuestaMala3)
            contRespuesta4.textContent =(num_pregunta.respuestaMala1)
            break;
            case 4:
            contPregunta.textContent =(num_pregunta.pregunta);
            contRespuesta1.textContent =(num_pregunta.respuestaMala3)
            contRespuesta2.textContent =(num_pregunta.respuestaMala2)
            contRespuesta3.textContent =(num_pregunta.respuestaCorrecta)
            contRespuesta4.textContent =(num_pregunta.respuestaMala1)
            break;
            default: console.log("Ningún dato válido switch 4");
        }
        }

        /*Creamos una función la cual dibujará las preguntas y 
        posibles opciones en el navegador */

            function validar_respuesta1(){
        if(contRespuesta1.textContent == num_pregunta.respuestaCorrecta){
            alert("Correcto");
        }else{
            alert("Incorrecto");
        }
    }


}


elegir_pregunta();


function validar_respuesta2(){
    if(contRespuesta2.textContent == num_pregunta.respuestaCorrecta){
        alert("Correcto");
    }else{
        alert("Incorrecto");
    }
}

function validar_respuesta3(){
    if(contRespuesta3.textContent == num_pregunta.respuestaCorrecta){
        alert("Correcto");
    }else{
        alert("Incorrecto");
    }
}

function validar_respuesta4(){
    if(contRespuesta4.textContent == num_pregunta.respuestaCorrecta){
        alert("Correcto");
    }else{
        alert("Incorrecto");
    }
}

