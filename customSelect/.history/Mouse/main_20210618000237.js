var boxEl = document.querySelector('.box')

boxEl.addEventListener('mouseover',function(e){
    // console.log('mouseover',e);
    
})
boxEl.addEventListener('mousemove',function(e){
    boxEl.querySelector('#screen').innerText = `ScreenX : ${e.screenX} - ScreenY : ${e.screenY}`;
    boxEl.querySelector('#page').innerText = `PageX : ${e.pageX} - PageY : ${e.pageY}`;
    boxEl.querySelector('#client').innerText = `ClientX : ${e.clientX} - ClientY : ${e.clientY}`;
    boxEl.querySelector('#offset').innerText = `X : ${e.X} - Y : ${e.Y}`;
    
})
boxEl.addEventListener('mouseleave',function(e){
    // console.log('mouseleave',e);
    
})
boxEl.addEventListener('mouseout',function(e){
    // console.log('mouseout',e);
    
})