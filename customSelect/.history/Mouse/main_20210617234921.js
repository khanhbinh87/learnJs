var boxEl = document.querySelector('.box')

boxEl.addEventListener('mouseover',function(e){
    console.log('mouseover',e);
    
})
boxEl.addEventListener('mousemove',function(e){
    console.log('mousemove',e);
    
})
boxEl.addEventListener('mouseleave',function(e){
    console.log('mouseleave',e);
    
})
boxEl.addEventListener('mouseout',function(e){
    console.log('mouseout',e);
    
})