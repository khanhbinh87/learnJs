// function myMove() {
//     let id = null;
//     const elem = document.getElementById("animate");   
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         elem.style.top = pos + "px"; 
//         elem.style.left = pos + "px"; 
//       }
//     }
//   }
var buttonElement = document.querySelector('button')
var duration = 2000;
var postEnd = 350;
var el = document.querySelector('#animate');
console.log(el);

    buttonElement.addEventListener('click',function(e){

        var id = setInterval(frame, 5);
        var pos = 0;
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
        
   
})