// (function($){
//     var div = $('.form-control')
    
//     var newDiv = $('<div>')
//     newDiv.addClass('hee');
//     newDiv.attr('my-value',123)
//     newDiv.attr('my-value')
//     console.log(newDiv.attr('my-value'));
    
//     console.log(newDiv[0]);
    
// })($)

var listSelect = $('.custom-select')

    listSelect.each(function(index,select){

        // var divWrapper  = document.createElement('div');
        // divWrapper.classList.add('wrapper-selected');

        // var divWrapper = $('<div>');
            // divWrapper.addClass('wrapper-select')
        var listOptions = $(select).find('option')

        var divWrapper = $('<div>',{class:'wrapper-select'});
        
        var divSelected = $('<div>',{class:'selected'});
        
        var ulElement = $('<ul>',{class:'list-options'});

        listOptions.each(function(idx,option){
               var value = $(option).text();
            //    var text = $(option).attr('value')
               var text = $(option).val()
              
               var liElement = $('<li>',{
                   value,
                   text
               })

               ulElement.append(liElement)
           })
        
            divWrapper.append(divSelected).append(ulElement);

            di
           
    })
