var audioEl = document.querySelector('#audio');

var playBtn = document.querySelector('.play')
var pauseBtn = document.querySelector('.pause')

var currentEl = document.querySelector('.current-time')
var durationEL = document.querySelector('.duration');
var durationBarEl = document.querySelector('.duration-bar')
var sliderBarEl = document.querySelector('.slider_bar')
var sliderBarCircleEl = document.querySelector('.slider_bar-circle')


audioEl.ontimeupdate = function(){
    var percent = audip
    durationEL.innerText = (formatTime(audioEl.duration));
    //property duration va currentTIme
    currentEl.innerText  = (formatTime(audioEl.currentTime));
    
}

playBtn.addEventListener('click',function(){
    audioEl.play();
    playBtn.style.display ="none";
    pauseBtn.style.display = "block"
})
pauseBtn.addEventListener('click',function(){
    audioEl.pause();
    playBtn.style.display ="block";
    pauseBtn.style.display = "none"
})

function formatTime(time){
    var minute = Math.floor(time / 60); 
    var second = Math.floor(time) - minute * 60; 
    minute =  minute < 10 ? "0" + minute : minute;
    second =  second < 10 ? "0" + second :second
    return minute + " : " + second
}



