$.ajax({
    type:"GET",
    dataType:"html",
    crossDomain:true,
    success:function(res){
        console.log(res);
        res.setHeader("Access-Control-Allow-Origin", "*");
    },
    url:"https://jsonplaceholder.typicode.com/todos/1"
})