

var listSelect = Array.from(document.querySelectorAll('.custom-select'))

    listSelect.forEach(function(select){

        var listOptions = Array.from(select.querySelectorAll('option'))

         //tao div bao
    var divWrapper  = document.createElement('div');
    divWrapper.classList.add('wrapper-selected');

    }
