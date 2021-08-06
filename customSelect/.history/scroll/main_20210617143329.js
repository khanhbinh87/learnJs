
var box = document.querySelector('.box')
window.addEventListener('scroll',function(e){
    
    console.log("inner",window.innerHeight);
    console.log(window.scrollY + window.innerHeight);
    console.log('top',window.scroll)

    if(window.scrollY + window.innerHeight >= box.offsetTop){
        console.log('Nhin thay vat the');
        
    }
    
})