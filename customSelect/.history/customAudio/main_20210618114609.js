var audioEl = document.querySelector('#audio');

var playBtn = document.querySelector('.play')
var pauseBtn = document.querySelector('.pause')


audioEl.ontimeupdate = function(){
    console.log('duration' ,audioEl.duration);
    console.log('current-time',audioEl.currentTime);
    
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
    return {
        a
    }
}


