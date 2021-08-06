//tao div
//tao class
//tao div rong
//tao my-value
//tao text

var select = document.querySelector('.custom-select');
var listOptions = Array.from(select.querySelectorAll('option'))


//tao div bao
var divWrapper  = document.createElement('div');
    divWrapper.classList.add('wrapper-selected');

//tao div select
var divSelected = document.createElement('div');
    divSelected.classList.add('selected');
    divSelected.innerText = 'Text tam';
   
//tao ul li
var ulElement = document.createElement('ul');
    ulElement.classList.add('list-options')
    console.log();
    
