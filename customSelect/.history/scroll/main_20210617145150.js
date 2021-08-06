
var box = document.querySelector('.box')
window.addEventListener('scroll',function(e){
    if(window.scrollY + window.innerHeight >= box.offsetTop){
        if(window.scrollY <= box.offsetTop + box.offsetHeight){

            console.log('Nhin thay vat the');
        }
        
    }
    
})