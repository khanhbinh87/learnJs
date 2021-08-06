var listCounters = Array.from(document.querySelectorAll('.counter'))

window.addEventListener('scroll',function(){
    var scrollTop = window.scrollY;
    var heightWindow = window.innerHeight;

    function offset(element){
        if(element.getClientReacts)
    }

    listCounters.forEach(function(counter){
         var duration   = Number(counter.getAttribute('duration')) || 3000;
         var dataNumber = Number(counter.getAttribute('data-number')) || 0;

         if(scrollTop + heightWindow >= counter.offsetTop){
            if(scrollTop <= counter.offsetTop + counter.offsetHeight){
    
                // console.log('Nhin thay vat the',counter);
            }
            
        }
    })
})
