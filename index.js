const hiden = document.querySelector('.hiden');
const hidenBtn = document.querySelector("#hiden-btn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const quizBtns = document.querySelectorAll(".btn-quiz");
const quizText = document.querySelector("#qText");
const menu = document.querySelector('.burguer-menu');
const sendBtn = document.querySelector('.final-btn');

// Open and close de menu - navbar
menu.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
})

let resultValues =  new Array();
// Cerrar la primera pantalla del quiz
hidenBtn.addEventListener('click', () => hiden.style.display = "none");

//función del quiz
(function quiz(){
    //for each para que la función trabajo con todos los botones
    quizBtns.forEach(btn => {
        // cambio de opciones cada que se escoge una 
        btn.addEventListener('click', () => {
            quizText.innerText = "¿Dónde te gustaría estar?";
            quizBtns[0].innerText = "Mi cama";
            quizBtns[1].innerText = "La playa";
            quizBtns[2].innerText = "Con mis compis";
            quizBtns[3].innerText = "Un concierto";

            // Se agarra el valor y se almacena en el array
            let val = btn.getAttribute("value");
            resultValues.push(val);

            //concicionales para que el quizz siga avanzando
            if (resultValues.length > 1){
                quizText.innerText = "¿Qué color prefieres?";
                quizBtns[0].innerText = "Azul";
                quizBtns[1].innerText = "Naranja";
                quizBtns[2].innerText = "Verde";
                quizBtns[3].innerText = "Rojo";
            }
            if (resultValues.length > 2){
                quizText.innerText = "¿Qué es lo que más te gusta hacer?";
                quizBtns[0].innerText = "Ver películas";
                quizBtns[1].innerText = "Bailar y perrear";
                quizBtns[2].innerText = "Tomar con mis amigxs";
                quizBtns[3].innerText = "Patinar";
            }
            if (resultValues.length > 3){
                quizText.innerText = "¿Que applicación usas más";
                quizBtns[0].innerText = "Netflix";
                quizBtns[1].innerText = "Tik Tok";
                quizBtns[2].innerText = "Instragram";
                quizBtns[3].innerText = "Spotify";
            }
            if (resultValues.length > 4){
                quizText.innerText = "¿Cuál es tu baile favorito?";
                quizBtns[0].innerText = "No bailo";
                quizBtns[1].innerText = "Cualquier baile me encanta";
                quizBtns[2].innerText = "El gusanito";
                quizBtns[3].innerText = "El robot";
            }
            if (resultValues.length > 5){
                quizText.innerText = "¿Qué bebida prefieres?";
                quizBtns[0].innerText = "Four Loko";
                quizBtns[1].innerText = "Piña colada";
                quizBtns[2].innerText = "Bacacho con coca";
                quizBtns[3].innerText = "Cerveza";
            }
            if (resultValues.length > 6){
                quizText.innerText = "¿Te gusta descubrir música nueva?";
                quizBtns[0].innerText = "Me encanta";
                quizBtns[1].innerText = "Solo para bailarla";
                quizBtns[2].innerText = "Para ponerla en las pedas";
                quizBtns[3].innerText = "Me da igual";
            }
            if (resultValues.length > 7){
                quizText.innerText = "¿Aún comprás CD's";
                quizBtns[0].innerText = "Si, los colecciono";
                quizBtns[1].innerText = "No, para eso está Internet";
                quizBtns[2].innerText = "Le robé los suyos a mi mamá/papá";
                quizBtns[3].innerText = "Mejor compro viniles";
            }
            if (resultValues.length >= 9){
                quizText.innerText = "¿Listo para descubrir música nueva?"
                quizBtns.forEach(btn => btn.style.display = "none");
                sendBtn.style.display = "inline";
            }
            console.log(resultValues, resultValues.length);

        })
    })
})();



