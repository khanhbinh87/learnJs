var listCounters = Array.from(document.querySelectorAll('.counter'))

window.addEventListener('click',function(){
    var scrollTop = window.scrollY;
    var heightWindow = window.innerHeight;
    listCounters.forEach(function(counter){
         var duration   = Number(counter.getAttribute('duration')) || 3000;
         var dataNumber = Number(counter.getAttribute(data-number)) || 0;

         if(window.scrollY + window.innerHeight >= box.offsetTop){
            if(window.scrollY <= box.offsetTop + box.offsetHeight){
    
                console.log('Nhin thay vat the');
            }
            
        }
    })
})
