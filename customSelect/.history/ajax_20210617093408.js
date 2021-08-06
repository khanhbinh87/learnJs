$.ajax({
    type:"GET",
    dataType:"html",
    crossDomain:true,
    success:function(res){
        console.log(res);
        
    },
    url:'https://jsonplaceholder.typicode.com/posts'
})
<tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td>
</tr>
<tr>
<th scope="row">3</th>
<td colspan="2">Larry the Bird</td>
<td>@twitter</td>
</tr>