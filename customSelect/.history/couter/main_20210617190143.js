var listCounters = Array.from(document.querySelectorAll('.counter'))

window.addEventListener('scroll',function(){
    var scrollTop = window.scrollY;
    var heightWindow = window.innerHeight;

    function offset(element){
        if(!element) return;

        if(!element.getClientRects().length){
            return {
                top:0,
                left:0
            }
        }
        var rect = element.getBoundingClientRect();
        var win  = element.ownerDocument.defaultView;

        return {
            top:rect.top + win.pageYOffset,
            left:rect.left + win.pageXOffset
        }
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
