var listCounters = Array.from(document.querySelectorAll('.counter'))

window.addEventListener('click',function(){
    var scrollTop = window.scrollY;

    listCounters.forEach(function(counter){
         var duration   = Number(counter.getAttribute('duration')) || 3000;
         var dataNumber = Number(counter.getAttribute(data-number)) || 0;
    })
})
