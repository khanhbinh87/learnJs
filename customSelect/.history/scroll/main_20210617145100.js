
var box = document.querySelector('.box')
window.addEventListener('scroll',function(e){
    
    console.log("inner",window.innerHeight);
    console.log(window.scrollY + window.innerHeight);
    console.log('top',window.scrollY)

    if(window.scrollY + window.innerHeight >= box.offsetTop){
        if(window.scrollY <= window.offsetHeight + box.offsetHeight)
        console.log('Nhin thay vat the');
        
    }
    
})