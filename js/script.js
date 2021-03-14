 const hors = document.querySelector('.h');
 const min = document.querySelector('.m');
 const sec = document.querySelector('.s');
 const hoursNumber = document.querySelector('.hours');
 const minutesNumber = document.querySelector('.minutes');
 

  function clock() {
      /* 
      getSeconds() - sekunda 
      getMinutes() - minuta
      getHours() - vrema
      new Date()
      */
     
      let time = new Date();
      let second = time.getSeconds() * 6;
      let minutes = time.getMinutes() * 6;
      let hours = time.getHours() * 30;
      
      sec.style = `transform: rotate(${second}deg)`;
      min.style = `transform: rotate(${minutes}deg)`;
      hors.style = `transform: rotate(${hours}deg)`;
      
      
      // innerHtml
      
      hoursNumber.innerHTML = time.getHours();
      minutesNumber.innerHTML = time.getMinutes();
      
      setTimeout(() => clock(), 1000);
  }
  
  clock();
  
  const link = document.querySelectorAll('.tabsItem');
  const tabs = document.querySelectorAll('.tabsContentItem');
  
  
  for (let i = 0; i < link.length; i++) {
     console.log(link[i]);
     
     link[i].addEventListener('click', function (e) {
         e.preventDefault(); //отключает действие
         
         for(let ix = 0; ix < link.length; ix++){
             link[ix].classList.remove('active');
             tabs[ix].classList.remove('active');
         }
         tabsNew(this, tabs[i]);
     })
     
  }
  
  function tabsNew(link, tabs) {
      link.classList.add('active');
      tabs.classList.add('active');
  }

// Секундамер

var seconds = 00;
var minutes = 00;
var hours = 00;
var appendSeconds = document.querySelector('.stopwatch__seconds');
var appendMinutes = document.querySelector('.stopwatch__minutes');
var appendHours = document.querySelector('.stopwatch__hours');
var buttonStart = document.querySelector('.stopwatch__btn');
var buttonStop = document.querySelector('.stopwatch__stop__btn');
var buttonReset = document.querySelector('.stopwatch__reset__btn');
var Interval;

buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
}

buttonStop.onclick = function () {
    clearInterval(Interval);
}

function startTimer() {
    seconds++;

    if (seconds < 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 60) {
        minutes++;
        appendMinutes.innerHTML = minutes;
        seconds = 0;
        appendSeconds.innerHTML = 0;
    }

    if (minutes > 60) {
        hours++;
        appendHours.innerHTML = hours;
        minutes = 0;
        appendMinutes.innerHTML = 0;
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        minutes = "0";
        seconds = "0";
        hours = "0";
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
        appendHours.innerHTML = hours;
    }

    if (seconds > 9) {
        appendMinutes.innerHTML = minutes;
    }
    
}