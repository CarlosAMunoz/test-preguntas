
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

opcion1.addEventListener("click", validarRespuesta1);
opcion2.addEventListener("click", validarRespuesta2);
opcion3.addEventListener("click", validarRespuesta3);
opcion4.addEventListener("click", validarRespuesta4);
/*Se traen los elementos div del html donde imprimiremos
las preguntas y respuestas. */



var formuladas = [p1.num_preg, p2.num_preg, p3.num_preg, p4.num_preg, p5.num_preg, p6.num_preg, p7.num_preg, p8.num_preg, p9.num_preg, p10.num_preg];
var respondido = [];
var respondido2 = [];
/*Creamos dos arrays, uno para guardar todos los objetos con preguntas formuladas y otro para todas las respondidas. */



//-----Crear opción de saltar pregunta 
//---- Que no se repitan preguntas
//---Que se pinte de color verde la correcta y rojo la incorrecta.
//--- Validar para cuando haya terminado y diga finalizar. 



        //Creamos y agregamos un elemento dentro del DOM, el cual dibujará un contador de preguntas.  
        const contenedor = document.querySelector(".container")
        const newDiv = document.createElement("div");
        contenedor.appendChild(newDiv);



function elegir_pregunta(){

    if(botonAcpt.value == "Start"){
        contRespuesta1.classList.add("respuesta");
        contRespuesta2.classList.add("respuesta");
        contRespuesta3.classList.add("respuesta");
        contRespuesta4.classList.add("respuesta");
        contPregunta.classList.add("pregunta");
        botonAcpt.value = "Siguiente";
    }


    contRespuesta1.classList.remove("pintarVerde");
    contRespuesta1.classList.remove("pintarRojo");
    contRespuesta2.classList.remove("pintarVerde");
    contRespuesta2.classList.remove("pintarRojo");
    contRespuesta3.classList.remove("pintarVerde");
    contRespuesta3.classList.remove("pintarRojo");
    contRespuesta4.classList.remove("pintarVerde");
    contRespuesta4.classList.remove("pintarRojo");




    var num_alea = aleatorio(1,formuladas.length);
    function aleatorio(min, max) {

        var resultado;
        resultado = Math.floor(Math.random() * (max - min + 1)) + min;


    //Validamos si dentro del array respondido ya existe ese dato. Comparándolo con formuladas. 
    //console.log(formuladas.some(idRespondido => idRespondido = formuladas[1]));
        
    console.log ("Formuladas: " + formuladas);
    console.log ("Respondidas:  " + respondido);
    console.log("Aleatorio generado: " + resultado);
    console.log("Tamaño Respondido: " + respondido.length)

    if(respondido.length <= 9){
        for(let i=0; i<= respondido.length; i++) {

            if (formuladas[resultado - 1]  === respondido[i]){
                resultado = aleatorio(1,formuladas.length);              
            }
        }
    }else{
        finDelJuego();
    }

    return  resultado;
    }
    /* Se crea función para crear números aleatorios.
    Esta función la llavamos dos veces, una para la pregunta que saldrá y otra para la posición de la pregunta correcta. */
    
    

    //Llamamos al aleatorio con mínimo de 1 y máximo de la longitud del array formuladas. 

    switch(num_alea){
        case 1:
            var num_pregunta = p1;
            respondido.push(p1.num_preg);
            respondido2.push(p1);
            break;
        case 2:
            var num_pregunta = p2;
            respondido.push(p2.num_preg);
            respondido2.push(p2);
            break;
        case 3:
            var num_pregunta = p3;
            respondido.push(p3.num_preg);
            respondido2.push(p3);
            break;
        case 4:
            var num_pregunta = p4;
            respondido.push(p4.num_preg);
            respondido2.push(p4);
            break;
        case 5:
            var num_pregunta = p5;
            respondido.push(p5.num_preg);
            respondido2.push(p5);
            break;
        case 6:
            var num_pregunta = p6;
            respondido.push(p6.num_preg);
            respondido2.push(p6);
            break;
        case 7:
            var num_pregunta = p7;
            respondido.push(p7.num_preg);
            respondido2.push(p7);
            break;
        case 8:
            var num_pregunta = p8;
            respondido.push(p8.num_preg);
            respondido2.push(p8);
            break;
        case 9:
            var num_pregunta = p9;
            respondido.push(p9.num_preg);
            respondido2.push(p9);
            break;
        case 10:
            var num_pregunta = p10;
            respondido.push(p10.num_preg);
            respondido2.push(p10);
            break;
        default: console.log("Ningún dato válido");
    }

       
        function aleatorio2(min, max){
         var resultado;
        resultado = Math.floor(Math.random() * (max - min + 1)) + min;
        return resultado;
        }

        var num_alea2 = aleatorio2(1,4); 
        console.log("Aleatrio2 es;" + num_alea2);
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


        //Imprimirmos el número de pregunta sobre las faltantes. 
        newDiv.classList = "respuesta"; // Demomento ***
        newDiv.textContent = `Pregunta ${respondido.length}/${formuladas.length}`;

    console.log("___________________")
}

function finDelJuego(){
    contPregunta.textContent =(" FIN DEL JUEGO ");
    contRespuesta1.textContent =(" FIN DEL JUEGO ")
    contRespuesta2.textContent =(" FIN DEL JUEGO ")
    contRespuesta3.textContent =(" FIN DEL JUEGO ")
    contRespuesta4.textContent =(" FIN DEL JUEGO ")
    throw new Error("Something went badly wrong!");
}


function validarRespuesta1(){
    var respondidoEnFuncion = respondido2.pop();

    if(contRespuesta1.textContent == respondidoEnFuncion.respuestaCorrecta){
    contRespuesta1.classList.add("pintarVerde");
    }else{
    contRespuesta1.classList.add("pintarRojo");
    }
 
}


function validarRespuesta2(){
    var respondidoEnFuncion = respondido2.pop();

    if(contRespuesta2.textContent == respondidoEnFuncion.respuestaCorrecta){
    contRespuesta2.classList.add("pintarVerde");
    }else{
    contRespuesta2.classList.add("pintarRojo");
    }
}

function validarRespuesta3(){
    var respondidoEnFuncion = respondido2.pop();

    if(contRespuesta3.textContent == respondidoEnFuncion.respuestaCorrecta){
        contRespuesta3.classList.add("pintarVerde");
    }else{
        contRespuesta3.classList.add("pintarRojo");
    }

}

function validarRespuesta4(){
    var respondidoEnFuncion = respondido2.pop();

    if(contRespuesta4.textContent == respondidoEnFuncion.respuestaCorrecta){
        contRespuesta4.classList.add("pintarVerde");
    }else{
        contRespuesta4.classList.add("pintarRojo");
    }
 
}

