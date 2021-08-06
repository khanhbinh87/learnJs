var boxEl = document.querySelector('.box')

boxEl.addEventListener('mouseover',function(e){
    console.log('mouseover',e);
    
})
boxEl.addEventListener('mousemove',function(e){
    boxEl.querySelector('#screen')
    
})
boxEl.addEventListener('mouseleave',function(e){
    console.log('mouseleave',e);
    
})
boxEl.addEventListener('mouseout',function(e){
    console.log('mouseout',e);
    
})