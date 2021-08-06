$.ajax({
    type:"GET",
    dataType:"json",
    success:function(res){
        console.log(res);
        res.setHeader("Access-Control-Allow-Origin", "*");
    },
    url:"https://luctc-practive-ajax.herokuapp.com/api/cars.php"
})