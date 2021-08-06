
var box = document.querySelector('.box')
window.addEventListener('scroll',function(e){
    
    console.log("inner",window.innerHeight);
    console.log(window.scrollY);

    if(window.scrollY + window.innerHeight >= box.offsetTop){
        console.log();
        
    }
    
})