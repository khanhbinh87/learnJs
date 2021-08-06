$.ajax({
    type:"GET",
    dataType:"html",
    success:function(res){
        console.log(res);
        res.setHeader("Access-Control-Allow-Origin", "*");
    },
    url:"https://luctc-practive-ajax.herokuapp.com/api/cars.php"
})