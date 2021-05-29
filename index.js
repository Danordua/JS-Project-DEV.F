import {quizQuestions} from './data.js';
console.log(quizQuestions);

const hiden = document.querySelector('.hiden');
const hidenBtn = document.querySelector("#hiden-btn");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const quizBtns = document.querySelectorAll(".btn-quiz");
const quizB = [btn1, btn2, btn3, btn4];
const quizText = document.querySelector("#qText");

const menu = document.querySelector('.burguer-menu');
const side = document.getElementById('sidebar')

const sendBtn = document.querySelector('.final-btn');

const player = document.querySelector('.container');
const quizApp = document.querySelector('#quiz-app');


 // Open and close de menu - navbar
 let menuIsON = false;
 const toggleMenu = (num, dis) => {
     side.style.left = 0;
    menu.style.display = 'none';
    menuIsON = true;
}

 menu.addEventListener('click', toggleMenu);

 const main = document.querySelector('main');
main.addEventListener('click', () => {
    if(menuIsON){
    side.style.left = '-23em';
    menu.style.display = 'block';
    menuIsON = false;
    }
    return;
})



let resultValues =  new Array();
 // Cerrar la primera pantalla del quiz
hidenBtn.addEventListener('click', () => hiden.style.display = "none");
 
// valor que se actualiza (suma uno) cada vez que se da click a un botón
let testValue = 1;
(function quiz(){
    //for each para que la función trabajo con todos los botones
    quizBtns.forEach(btn => {
        // cambio de opciones cada que se escoge una 
        btn.addEventListener('click', () => {
            if (resultValues.length < 8){
            //se utiliza el valor actualizado para hacer la búsqueda en el objeto
            quizText.innerText = quizQuestions[testValue].question;
            quizB.map((b, i) => {
                b.innerText = quizQuestions[testValue].answers[i];
            });
            //aqui se actualiza el valor
            testValue += 1;
        }
            // Se agarra el valor y se almacena en el array
            let val = btn.getAttribute("value");
            resultValues.push(val);
            console.log(resultValues);

            //envia la pantalla final del quiz
            if (resultValues.length > 8){
                quizText.innerText = "¿Listo para descubrir música nueva?"
                quizBtns.forEach(btn => btn.style.display = "none");
                sendBtn.style.display = "inline";
            }
        })
    })
})();


 // valor se repitio más
const counterSong = () => {
    //contadores
        let sad = 0;
        let baile = 0;
        let ranchera = 0;
        let rock = 0;
        // itera por result values y suma al contador cuando encuentra cada valor
    resultValues.forEach(val => {
        if (val === "sad") sad++;
        if (val === "baile") baile++;
        if (val === "ranchera") ranchera++;
        if (val === "rock") rock++;
    })

    //crea un array con los valores en distintos indices y regresa el indice con el mayor valor
    let arr = [sad, baile, ranchera, rock];
    let highNum = arr.reduce((a, b) => a < b ? b : a, 0);
    return arr.indexOf(highNum);
}

 // variables de las canciones
let songName = document.querySelector('#song-name');
const sadAudio = "audios/sad.mp3";
const baileAudio = "audios/baile.mp3";
const rancheraAudio = "audios/ranchera.mp3";
const rockAudio = "audios/rock.mp3";
const songPic = document.querySelector('#song-img')

 // variables de las imagenes de canciones
const rockPic = "https://www.buscaletras.com/photos/albums/fidlar/max/fidlar.jpg";
const sadPic = "https://images.genius.com/fa76d06434b20d74bca0b1979c21542c.1000x1000x1.jpg";
const rancheraPic = "https://cdns-images.dzcdn.net/images/cover/e4b95031819404fbfa1122fa514582c7/500x500.jpg";
const bailePic = "https://www.hoyesarte.com/constelac10n/files/2020/11/Koffee-Toast.jpg";

 //variables del reproductor
let playBtn = document.querySelector("#play");
let range = document.querySelector("#range");
let playImg = document.querySelector("#play-img")
let totalTime = 0;
let currentTime = 0;
let isPlaying = false;
let song = new Audio();

 // funcion del reproductor
function playSong(recomend){
    song.src = recomend;
    console.log(song)
    
    // para que se escuche la canción
    playBtn.addEventListener('click', function() {
        if (!isPlaying){
            song.play();
            totalTime = song.duration;
            range.max = totalTime;
            playImg.src = "imgs/pause.png"; 
            isPlaying = true;
            console.log(isPlaying);
        } else {
                song.pause();
                isPlaying = false;
                playImg.src = "imgs/play1.png";  
                console.log(isPlaying)
    }

        song.addEventListener('ended',function(){
            song.currentTime = 0
            song.pause();
            isPlaying = false;
            range.value = 0;
            playImg.src = "imgs/play1.png";
        })
        song.addEventListener('timeupdate',function(){
            range.value = song.currentTime;
        })
        range.addEventListener('change',function(){
            song.currentTime = range.value;
        })
    })
}

 // función del reproductor

sendBtn.addEventListener('click', () => {
    quizApp.style.display = 'none';
    player.style.display = "inline";
    document.querySelector('.wrapper2').style.marginTop = '25em';
    // depediendo del resultado del resulArr se manda la función con ese audio
    if (counterSong() === 0) {
        songName.innerText = "Cupido - La Pared";
        songPic.src = sadPic;
        playSong(sadAudio);
    }
    if (counterSong() === 1){
        songName.innerText = "Koffee - Toast";
        songPic.src = bailePic;
        playSong(baileAudio);
    }
    if (counterSong() === 2){ 
        songName.innerText = "T3R Elemento - EL Chivo";
        songPic.src = rancheraPic;
        playSong(rancheraAudio);
    }
    if (counterSong() === 3){
        songName.innerText = "FIDLAR - No Waves";
        songPic.src = rockPic;
        playSong(rockAudio);
    }
})




