'use strict';

let score = 0;
function bienvenida() {
    let user = prompt("Hola! ¿Cuál es tu nombre?");
    alert("Hola "+user+"\n ¡Juguemos algo! Te haré 7 preguntas sobre mí y vemos si aciertas 🤪")  
};

function preguntas() {
    alert("Recuerda que para responder debes escribir y/n");
    function pregunta1(){
    let pregunta_1 = prompt("¿Uno de mis hobbys es escribir novelas cortas o cuentos? (Y/N)");
    if (pregunta_1.toUpperCase() === "Y") {
         console.log("Acertaste! me encanta escribir pero no le he mostrado a nadie y no pienso hacerlo 😬");
        alert("CORRECTO!!!\n Acertaste! me encanta escribir pero no le he mostrado a nadie y no pienso hacerlo 😬");
        score++;
    } else {
        alert("###ERROR###\nme encanta escribir pero no le he mostrado a nadie y no pienso hacerlo 😬");
    }
    }

    function pregunta2(){
    let pregunta_2 = prompt("¿Me gustan los perritos? (Y/N)");
    if (pregunta_2.toUpperCase() === "Y") {
        console.log("No! Soy amante de los gatos y en mi vida pasada creo que fui gato porque me dan miedo los perros 🐱");
        alert("###ERROR###\nSoy amante de los gatos y en mi vida pasada creo que fui gato porque me dan miedo los perros 🐱");
    } else {
        console.log("Acertaste! Soy amante de los gatos y en mi vida pasada creo que fui gato porque me dan miedo los perros 🐱 ");
        alert("CORRECTO!!!\nSoy amante de los gatos y en mi vida pasada creo que fui gato porque me dan miedo los perros 🐱");
        score++;
    }
    }      

    function pregunta3(){
    let pregunta_3 = prompt("¿He sido jugadora de Rugby? (Y/N)");
    if (pregunta_3.toUpperCase() === "Y") {
         console.log("CORRECTO!!!...  Sí he jugado rugby en la universidad pero mi corazon esta con el atletismo 💗");
        alert("CORRECTO!!!\n Sí he jugado rugby en la universidad pero mi corazon esta con el atletismo 💗");
        score++;
    } else {
        console.log("###ERROR###!...  Sí he jugado rugby en la universidad pero mi corazon esta con el atletismo 💗");
        alert("###ERROR###\n Sí he jugado rugby en la universidad pero mi corazon esta con el atletismo 💗");
    }
    }

    function pregunta4 () {
    let pregunta_4 = prompt("¿Me gustan las películas de terror? (Y/N)");
    if (pregunta_4.toUpperCase() === "Y") {
        console.log("CORRECTO!!!...Amo las peliculas de terror ");
        alert("CORRECTO!!!\nAmo las peliculas de terror y asustar amigos");
        score++;
    } else {
        console.log("###ERROR###... Amo las peliculas de terror y asustar amigos");
        alert("###ERROR###\nAmo las peliculas de terror y asustar amigos");
    }
    }

    function pregunta5 () {
    let pregunta_5 = prompt("Como ultima pregunta...\n¿Me considero una persona extrovertida? (Y/N)");
    if (pregunta_5.toUpperCase() === "Y") {
        console.log("###ERROR###!... No me considero una persona extrovertida, a veces pienso que tengo una bateria de sociabilidad que se acaba en 4 horas");
        alert("###ERROR###\n No me considero una persona extrovertida, a veces pienso que tengo una bateria de sociabilidad que se acaba en 4 horas");
    } else {
        console.log("###ERROR###... No me considero una persona extrovertida, a veces pienso que tengo una bateria de sociabilidad que se acaba en 4 horas!");
        alert("CORRECTO!!!\n No me considero una persona extrovertida, a veces pienso que tengo una bateria de sociabilidad que se acaba en 4 horas");
        score++;
    }
    alert("Ahora te toca adivinar mi edad. Tendras 4 intentos!");
    
    }
    
    

    function preguntaSeis() {
            let years;
            let attempts = 0;
        
            while (years != 25 && attempts < 4) {
            years = prompt("¿Qué edad crees que tengo?");
            if (years < 25) {
                console.log("Muy bajo");
                alert("Muy bajo!\n Pero gracias por verme más joven 🤭.");
            } else if (years > 25) {
                console.log("Muy alto");
                alert("Muy alto!\n te doy una pista. Nací en los 90's.");

            } else {
                console.log("CORRECTO, adivinaste");
                alert("Correcto!\n Tengo un cuarto de siglo de vida 🙈.");
                score++;
                break;
            }
            attempts++;
            }
            alert("Mi edad es 25 años.");
        }


        function preguntaSiete() {
            let musicaFavorita = ["rock", "indie", "blues"];
            let musica;
            let attempts = 1;
            while (attempts <= 6) { 
                musica = prompt("Adivina uno de mis géneros musicales favoritos:");
                musica = musica.toLowerCase();
                for (let i = 0; i < musicaFavorita.length; i++) {
                    if (musica === musicaFavorita[i]) {
                        console.log("CORRECTO, adivinaste");
                        alert("Correcto!!\n Amo ese género musical.");
                        score++; 
                        attempts = 7;
                        break;
                    }
                }
                if (attempts < 7) {
                    console.log(musica, "INCORRECTO, intento " + attempts + " de 6");
                    alert("Incorrecto!\n Pista, una de mis bandas favoritas es Arctic Monkeys.");
                }
                attempts++;
            }
            console.log("Mis géneros musicales favoritos son: ", musicaFavorita);
            alert("Mis géneros musicales favoritos son: rock, indie y blues.");


        }
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        preguntaSeis();
        preguntaSiete();
        alert("Tu score es: " + score + " puntos.");
    
    }
          
bienvenida();
preguntas();


