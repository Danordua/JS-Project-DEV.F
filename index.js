const hiden = document.querySelector('.hiden');
const hidenBtn = document.querySelector("#hiden-btn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const quizBtns = document.querySelectorAll(".btn-quiz");
const quizText = document.querySelector("#qText");
const menu = document.querySelector('.burguer-menu');



menu.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
})

let resultValues =  new Array();

console.log(resultValues);

const startQuiz = () => {
hiden.style.display = "none";
};

hidenBtn.addEventListener('click', startQuiz);

(function quiz(){
    quizBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            quizText.innerText = "¿Dónde te gustaría estar?";
            let val = btn.getAttribute("value");
            resultValues.push(val);
            console.log(resultValues);
        })
    })
})();


