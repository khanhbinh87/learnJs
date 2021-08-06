//tao div
//tao class
//tao div rong
//tao my-value
//tao text

var select = document.querySelector('.custom-select');
var listOptions = Array.from(select.querySelectorAll('option'))
var body = document.querySelector('body')



//tao div bao
var divWrapper  = document.createElement('div');
    divWrapper.classList.add('wrapper-selected');

//tao div select
var divSelected = document.createElement('div');
    divSelected.classList.add('selected');
    divSelected.setAttribute('my-value','Attr')
    divSelected.innerText = 'Text tam';
   
//tao ul li
var ulElement = document.createElement('ul');
    ulElement.classList.add('list-options')

//duyet tung listOptions
listOptions.forEach(function(optionEl){
    var valueOption = optionEl.getAttribute('value');
    var textOption  = optionEl.innerText;

    var liElement = document.createElement('li');
        liElement.setAttribute('my-value',valueOption);
        liElement.innerText = textOption;
        
        ulElement.append(liElement)

})

//appending
divWrapper.append(divSelected);
divWrapper.append(ulElement);
document.body.appendChild(divWrapper);

select.parentNode.insertBefore(divWrapper,select)

