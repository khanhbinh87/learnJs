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


        divSelected.click(function(){
            $('.list-options').each(function(inx,_ulElement){
                if(_ulElement !== ulElement.get(0)) $(_ulElement).slideUp(300)
            })
            ulElement.slideToggle(300)
        })
        if(listOptions.length > 0){
            divSelected.attr('value',listOptions[0].value)
                .text(listOptions[0].innerText)
        }

        listOptions.each(function(idx,option){
               var value = $(option).val(),text = $(option).text();
            //    var text = $(option).attr('value')
               
            if($(option).attr('selected')){
                divSelected.attr('value',option.value)
                .text(option.innerText)
            }
               var liElement = $('<li>',{
                   value,
                   text,
                   click:function(e){
                       let value = $(this).attr('value'), text = $(this).text();

                       listOptions.removeAttr('select');

                       $(select).find(`option[value="${value}"]`).attr('selected',true);
                       divSelected.attr('value',value).text(text)

                       ulElement.slideUp(300)
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
    document.addEventListener('keyup',function(e){
            if(e.keyCode === 27) || e.keyCode === 13){
                \
            }
    })