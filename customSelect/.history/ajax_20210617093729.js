$.ajax({
    type:"GET",
    dataType:"html",
    crossDomain:true,
    success:function(res){
        console.log(res);
        
    },
    url:'https://jsonplaceholder.typicode.com/posts',

})
<tr>

function resApi(data){
    var xHTml = "";
    for(var i = 0; i < data.length ;i++){
        var car = data[i]
        return xHTml += ` <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
      </tr>`
    }
}

