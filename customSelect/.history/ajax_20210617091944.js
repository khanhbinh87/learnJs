$.ajax({
    type:"GET",
    dataType:"html",
    crossDomain:true,
    success:function(res){
        console.log(res);
        
    },
    url:'https://jsonplaceholder.typicode.com/posts'
})