console.log('1. age = ' , age); //undef
var age = 20;

console.log('2. age = ' , age);//20

let firtName= "a";
let lastName ="b";
const year = 1986;

console.log('3. calAge()' , calAge(year));//36

function calAge(year){
    return 2021 - year
}

console.log('4. calAge()' , calAge(year));//36

// console.log('5. getFullName()' , getFullName());//err

var getFullName = function(){
    return firtName + ' ' + lastName
}

console.log('6. getFullName()' , getFullName());//ab


this.name ="binh";
window.age = 27
