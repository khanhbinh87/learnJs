$.ajax({
    type:"GET",
    dataType:"html",
    success:function(res){
        console.log(res)
    },
    url:"https://luctc-practive-ajax.herokuapp.com//api/"
})