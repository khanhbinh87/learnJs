$.ajax({
    type:"GET",
    dataType:"html",
    crossDomain:true,
    success:function(res){
        console.log()
        resApi(JSON.parse(res));

        
    },
    url:'https://jsonplaceholder.typicode.com/posts',

})


function resApi(data){
    var xHTml = "";
    for(var i = 0; i < data.length ;i++){
        var car = data[i]
        xHTml = xHTml + `<tr>
            <td>${car.id}</td>
            <td>${car.title}</td>
          
      </tr>`
    }
}

