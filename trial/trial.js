const level = document.querySelector('#range');

const numPages = document.querySelector('.value-num');
const price = document.querySelector('.price-num');

const switchBtn = document.querySelector('#switch');

// const para saber que incluye el paquete 
const x3 = document.querySelector('.x3');
const x1 = document.querySelector('.x1');

//
const steps = document.querySelectorAll('.steps');
const s1 = document.querySelector('.step1');
const s2 = document.querySelector('.step2');
const s3 = document.querySelector('.step3');
const s4 = document.querySelector('.step4');
const s5 = document.querySelector('.step5');
console.log(s2.style.width)
// cambia los numeros de pages
numPages.textContent = Number(level.value) * 100;
switchBtn.value = 'off';

switchBtn.addEventListener('click', () => {
    if(switchBtn.value == 'on') { 
        switchBtn.value = 'off';
        selectPack();
    }
    else {
        let numPrice = Number(price.textContent);
        switchBtn.value = 'on';
        price.textContent = numPrice - (numPrice * .25)
    }
})

level.addEventListener('input', selectPack);
level.addEventListener('input', costumeSteps);

function selectPack(){
    let priceNum = parseInt(price.textContent);
    if (level.value == 1) {
      numPages.textContent = Number(level.value) * 100;
      price.textContent = 0;
      x3.classList.remove('fa-check');
      x3.classList.add('fa-times');
      x1.classList.remove('fa-check');
      x1.classList.add('fa-times');
    }
    if (level.value == 2) {
      numPages.textContent = 500;
      price.textContent = 12;
      x3.classList.remove('fa-times');
      x3.classList.add('fa-check');
      x1.classList.remove('fa-check');
      x1.classList.add('fa-times');
      if(switchBtn.value == 'on') price.textContent -= (price.textContent * .25)
    }
    if (level.value == 3) {
      numPages.textContent = '1K';
      price.textContent = 16;
      x1.classList.remove('fa-times');
      x1.classList.add('fa-check');
      if(switchBtn.value == 'on') price.textContent -= (price.textContent * .25)
    }
    if (level.value == 4) {
      numPages.textContent = '5K';
      price.textContent = 24;
      if(switchBtn.value == 'on') price.textContent -= (price.textContent * .25)
    }
    if (level.value == 5) {
      numPages.textContent = '10K';
      price.textContent = 36;
      if(switchBtn.value == 'on') price.textContent -= (price.textContent * .25)
    }
}

function costumeSteps(st) {
  if(level.value == 1){
    s1.style.width = '.7em'
    s1.style.height = '.7em'
    s1.style.background = '#12CD29';
  } else {
    s1.style.width = '.5em'
    s1.style.height = '.5em'
    s1.style.background = '#a0bfc5';
  }
  if(level.value == 2){
    s2.style.width = '.7em'
    s2.style.height = '.7em'
    s2.style.background = '#12CD29';
  } else {
    s2.style.width = '.5em'
    s2.style.height = '.5em'
    s2.style.background = '#a0bfc5';
  }
  if(level.value == 3){
    s3.style.width = '.7em'
    s3.style.height = '.7em'
    s3.style.background = '#12CD29';
  } else {
    s3.style.width = '.5em'
    s3.style.height = '.5em'
    s3.style.background = '#a0bfc5';
  }
  if(level.value == 4){
    s4.style.width = '.7em'
    s4.style.height = '.7em'
    s4.style.background = '#12CD29';
  } else {
    s4.style.width = '.5em'
    s4.style.height = '.5em'
    s4.style.background = '#a0bfc5';
  }
  if(level.value == 5){
    s5.style.width = '.7em'
    s5.style.height = '.7em'
    s5.style.background = '#12CD29';
  } else {
    s5.style.width = '.5em'
    s5.style.height = '.5em'
    s5.style.background = '#a0bfc5';
  }
}

s1.addEventListener('click', () => {
  level.value = 1;
  selectPack();
  costumeSteps();
})

s2.addEventListener('click', () => {
  level.value = 2;
  selectPack();
  costumeSteps();
})

s3.addEventListener('click', () => {
  level.value = 3;
  selectPack();
  costumeSteps();
})

s4.addEventListener('click', () => {
  level.value = 4;
  selectPack();
  costumeSteps();
})

s5.addEventListener('click', () => {
  level.value = 5;
  selectPack();
  costumeSteps();
})