var boxEl = document.querySelector('.box')

boxEl.addEventListener('mouseover',function(e){
    console.log('mouseover');
    
})
boxEl.addEventListener('mousemove',function(e){
    console.log('mousemove');
    
})
boxEl.addEventListener('mouseleave',function(e){
    console.log('mouseleave');
    
})
boxEl.addEventListener('mouseout',function(e){
    console.log('mouseout');
    
})