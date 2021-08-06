(function($){
    var div = $('.form-control')
    
    var newDiv = $('<div>')
    newDiv.addClass('hee');
    newDiv.attr('my-value',123)
    newDiv.attr('my-value',123)

    console.log(newDiv[0]);
    
})($)
