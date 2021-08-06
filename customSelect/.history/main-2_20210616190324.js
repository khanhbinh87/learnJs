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

        var divWrapper = $('<div>',{class:'wrapper-selected'});
        
        var divSelected = $('<div>',{class:'selected'});
        
        var ulElement = $('<ul>',{class:'list-options'});

        if(listOptions.length > 0){
            divSelected.attr('value',listOptions[0].value)
                .text(listOptions[0].innerText)
        }

        listOptions.each(function(idx,option){
               var value = $(option).val();
            //    var text = $(option).attr('value')
               var text = $(option).text()
              
               var liElement = $('<li>',{
                   value,
                   text,
                   click:function(e){
                       let value = $(this).attr('value');

                       listOptions.removeAttr('select');

                       $(select).find(`option[value="${value}"]`).attr('selected',true)

                   }
               })

            //    liElement.click(function(e){
            //        console.log(e.target)
            //    })
               ulElement.append(liElement)
           })
        
            divWrapper.append(divSelected).append(ulElement).insertAfter(select);
            // $(select).css('display','none')
           
    })
