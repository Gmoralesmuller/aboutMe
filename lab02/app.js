'use strict';

function bienvenida() {
    let user = prompt("Hola! ¿Cuál es tu nombre?");
    alert("Hola "+user+"\n ¡Juguemos algo! Te haré 5 preguntas sobre mí y vemos si aciertas 🤪")  
};

function preguntas() {
    alert("Recuerda que para responder debes escribir y/n");
    let pregunta_1 = prompt("¿Uno de mis hobbys es escribir novelas cortas o cuentos? (Y/N)");
    if (pregunta_1.toUpperCase() === "Y") {
         console.log("Acertaste! me encanta escribir pero no le he mostrado a nadie y no pienso hacerlo 😬");
        alert("CORRECTO!!!\n Acertaste! me encanta escribir pero no le he mostrado a nadie y no pienso hacerlo 😬");
    } else {
        
        alert("###ERROR###\nme encanta escribir pero no le he mostrado a nadie y no pienso hacerlo 😬");
    }

    let pregunta_2 = prompt("¿Me gustan los perritos? (Y/N)");
    if (pregunta_2.toUpperCase() === "Y") {
        
        alert("###ERROR###\nSoy amante de los gatos y en mi vida pasada creo que fui gato porque me dan miedo los perros 🐱");
    } else {
       
        alert("CORRECTO!!!\nSoy amante de los gatos y en mi vida pasada creo que fui gato porque me dan miedo los perros 🐱");
    }

    let pregunta_3 = prompt("¿He sido jugadora de Rugby? (Y/N)");
    if (pregunta_3.toUpperCase() === "Y") {
         console.log("###ERROR###...  Sí he jugado rugby en la universidad pero mi corazon esta con el atletismo 💗");
        alert("CORRECTO!!!\n Sí he jugado rugby en la universidad pero mi corazon esta con el atletismo 💗");
    } else {
        console.log("CORRECTO!!!...  Sí he jugado rugby en la universidad pero mi corazon esta con el atletismo 💗");
        alert("###ERROR###\n Sí he jugado rugby en la universidad pero mi corazon esta con el atletismo 💗");
    }

    let pregunta_4 = prompt("¿Me gustan las películas de terror? (Y/N)");
    if (pregunta_4.toUpperCase() === "Y") {
        console.log("CORRECTO!!!...Amo las peliculas de terror ");
        alert("CORRECTO!!!\nAmo las peliculas de terror y asustar amigos");
    } else {
        console.log("###ERROR###... Amo las peliculas de terror y asustar amigos");
        alert("###ERROR###\nAmo las peliculas de terror y asustar amigos");
    }

    let pregunta_5 = prompt("Como ultima pregunta...\n¿Me considero una persona extrovertida? (Y/N)");
    if (pregunta_5.toUpperCase() === "Y") {
        console.log("CORRECTO!!!... No me considero una persona extrovertida, a veces pienso que tengo una bateria de sociabilidad que se acaba en 4 horas");
        alert("###ERROR###\n No me considero una persona extrovertida, a veces pienso que tengo una bateria de sociabilidad que se acaba en 4 horas");
    } else {
        console.log("###ERROR###... No me considero una persona extrovertida, a veces pienso que tengo una bateria de sociabilidad que se acaba en 4 horas!");
        alert("CORRECTO!!!\n No me considero una persona extrovertida, a veces pienso que tengo una bateria de sociabilidad que se acaba en 4 horas");
    }
}

bienvenida();
preguntas();