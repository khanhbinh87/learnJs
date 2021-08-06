var listCounters = Array.from(document.querySelectorAll('.counter'))


    var listCounters = listCounters.map(function(counter){
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
        var isRun = obj.isRun;

        if(isRun === false){
            var duration   = Number(counter.getAttribute('duration')) || 3000;
            var dataNumber = Number(counter.getAttribute('data-number')) || 0;
            var offset     = getOffset(counter)
            
            if(scrollTop + heightWindow >= offset.top){
               if(scrollTop <= offset.top + counter.offsetHeight){

                    //xu ly hieu ung

                    runEffectCounter(counter,duration,dataNumber)
                    listCounters[index].isRun = true;
               }
             }
        }
    })
})

function runEffectCounter(counter,duration,dataNumber){
        var id  = setInterval(frame,5);
        var dataNumber = 0;
        counter.innerTex = dataNumber;

        var start =  new Date().getTime();
        
        function frame(){
            var end =  new Date().getTime();
            if(end - start >= duration){
                el.style.top= postEnd + 'px'
                el.style.left= postEnd + 'px'
                clearInterval(id)
            }
            else{
                var time = end - start;
                var percent = time /duration;
                    pos = postEnd  * percent;
                el.style.top = pos + 'px';
                el.style.left = pos + 'px';


            }

         }
}