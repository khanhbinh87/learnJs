$.ajax({
    type:"GET",
    dataType:"html",
    crossDomain:true,
    success:function(res){

        resApi(JSON.parse(res));

        
    },
    url:'https://jsonplaceholder.typicode.com/users',

})


function resApi(data){
    var xHTml = "";
    for(var i = 0; i < data.length ;i++){
        var car = data[i]
        xHTml = xHTml + `<tr>
            <td>${car.id}</td>
            <td>${car.name}</td>
            <td>${car.name}</td>
            <td>${car.name}</td>
      </tr>`
    }
    $('.table tbody').html(xHTml)
}

