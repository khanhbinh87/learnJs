var x = 10;

one()
function one(){
    var y = 5;
    two();

    function two(){
        var z = 15;

        three();

        function three(){
            var t  = x + y + z;

            console.log( '1 . x + y + z' , t); //30
            four()
        }
    }
}
function four(){
    var t = 30 ;
    console.log( '2 . x' , x);//10
    // console.log( '3 .  y ' , y);//loi
    // console.log( '4 . z' , z);//loi
    console.log( '5 . t ' , t);//30

}


//script scope co the dung  variable enviroment trong global scope
//block  scope co the dung  variable enviroment  trong script scope
//local scope cua 1 function con co the dung variable enviroment nam trong local scope cua function cha

