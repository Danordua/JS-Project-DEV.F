const hiden = document.querySelector('.hiden');
const hidenBtn = document.querySelector("#hiden-btn")


const startQuiz = () => {
hiden.style.display = "none";
};

hidenBtn.addEventListener('click', startQuiz);
