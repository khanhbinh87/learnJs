var listCounters = Array.from(document.querySelectorAll('.counter'))


    listCounters.map(function(counter){
        return{
            el:counter,
            isRun:false
        }
    })

console.log(listCounters);

window.addEventListener('scroll',function(){ 
    var scrollTop = window.scrollY;
    var heightWindow = window.innerHeight;

    function getOffset(element){
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

    listCounters.forEach(function(obj,index){

        var counter = obj.el;
        var isRun = ob
        
        if(isRun === false){
            var duration   = Number(counter.getAttribute('duration')) || 3000;
            var dataNumber = Number(counter.getAttribute('data-number')) || 0;
            var offset     = getOffset(counter)
            
            if(scrollTop + heightWindow >= offset.top){
               if(scrollTop <= offset.top + counter.offsetHeight){
                  console.log('nhin thay',counter); 

                  listCounters[index].isRun = true;
               }
             }
        }
    })
})
