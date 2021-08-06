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

var duration = 3000;

    buttonElement.addEventListener('click',function(e){

        var id = setInterval(frame, 5);
        var start =  new Date().getTime();
       
        function frame(){
            var end =  new Date().getTime();
            if(end - start >= duration){
                clearInterval(id)
            }
            else{

                setTimeout(function(){

                    var time = end - start;
                    var percent = time /duration;
                    console.log(percent);
                    
                },2000)



            }

        }
        
   
})