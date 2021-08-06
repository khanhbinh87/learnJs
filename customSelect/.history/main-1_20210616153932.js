

var listSelect = Array.from(document.querySelectorAll('.custom-select'))

    listSelect.forEach(function(select){

        var listOptions = Array.from(select.querySelectorAll('option'));
    
         //tao div bao
        var divWrapper  = document.createElement('div');
            divWrapper.classList.add('wrapper-selected');

        
        //tao div select
        var divSelected = document.createElement('div');
        divSelected.classList.add('selected');


        //tao ul li
        var ulElement = document.createElement('ul');
        ulElement.classList.add('list-options')

        listOptions.forEach(function(optionEl,index){})

    })


