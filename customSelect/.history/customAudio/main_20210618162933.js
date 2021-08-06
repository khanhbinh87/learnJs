var audioEl = document.querySelector('#audio');

var playBtn = document.querySelector('.play')
var pauseBtn = document.querySelector('.pause')

var currentEl = document.querySelector('.current-time')
var durationEL = document.querySelector('.duration');
var durationBarEl = document.querySelector('.duration-bar')
var sliderBarEl = document.querySelector('.slider_bar')
var sliderBarCircleEl = document.querySelector('.slider_bar-circle')
var durationBarEl = document.querySelector('.duration-bar')

var isReadyDrag = false;

audioEl.ontimeupdate = function(){
    var percent = audioEl.currentTime / audioEl.duration;
    
    
    durationEL.innerText = (formatTime(audioEl.duration));
    //property duration va currentTIme
    currentEl.innerText  = (formatTime(audioEl.currentTime));
    sliderBarEl.style.width = percent * 100 + "%";
    sliderBarCircleEl.style.left = percent * 100 + '%'
    
}
durationBarEl.addEventListener('click',function(e){

    console.log('click');
    
    var percent = e.offsetX / this.offsetWidth;
    
    sliderBarEl.style.width = percent * 100 + "%";
    sliderBarCircleEl.style.left = percent * 100 + '%'
    audioEl.currentTime = percent * audioEl.duration
})

audioEl.onplay = function(){

    playBtn.style.display ="none";
    pauseBtn.style.display = "block"
}
audioEl.onpause = function(){
    playBtn.style.display ="block";
    pauseBtn.style.display = "none"
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

durationBarEl.addEventListener('mousedown',function(){
    console.log('mousedown');

    isReadyDrag= true;
    
})
durationBarEl.addEventListener('mouseup',function(){
    console.log('mouseup');
    isReadyDrag = false
    
})
window.addEventListener('mousemove',function(e){

    if(isReadyDrag){
        var clientX = e.clientX;
        var offsetLeftDurationBar = durationBarEl.offsetLeft;
        console.log(offsetLeftDurationBar);
        
        
        
    }
    
})

function formatTime(time){
    var minute = Math.floor(time / 60); 
    var second = Math.floor(time) - minute * 60; 
    minute =  minute < 10 ? "0" + minute : minute;
    second =  second < 10 ? "0" + second :second
    return minute + " : " + second
}



