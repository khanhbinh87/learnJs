var boxEl = document.querySelector('.box')

boxEl.addEventListener('mouseover',function(e){
    // console.log('mouseover',e);
    
})
boxEl.addEventListener('mousemove',function(e){
    boxEl.querySelector('#screen').innerText = `ScreenX : ${e.screenX} - ScreenY : ${e.screenY}`;
    boxEl.querySelector('#page').innerText = `ScreenX : ${e.screenX} - ScreenY : ${e.screenY}`;
    boxEl.querySelector('#client').innerText = `ScreenX : ${e.screenX} - ScreenY : ${e.screenY}`;
    boxEl.querySelector('#offset').innerText = `ScreenX : ${e.screenX} - ScreenY : ${e.screenY}`;
    
})
boxEl.addEventListener('mouseleave',function(e){
    // console.log('mouseleave',e);
    
})
boxEl.addEventListener('mouseout',function(e){
    // console.log('mouseout',e);
    
})