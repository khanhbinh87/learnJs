var audioEl = document.querySelector('#audio');

var playBtn = document.querySelector('.play')
var pauseBtn = document.querySelector('.pause')


audioEl.ontimeUpdate = function(){
    console.log(audioEl.duration);
    console.log(audioEl.current);
    
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