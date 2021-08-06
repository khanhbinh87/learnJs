//tao div
//tao class
//tao div rong
//tao my-value
//tao text

var select = document.querySelector('.custom-select');
if(select){
    var listOptions = Array.from(select.querySelectorAll('option'))

    //tao div bao
    var divWrapper  = document.createElement('div');
        divWrapper.classList.add('wrapper-selected');

        divSelected.addEventListener('click',function(){
            this.classList.toggle('open')
        })

    //tao div select
    var divSelected = document.createElement('div');
        divSelected.classList.add('selected');

        

        if(listOptions.length > 0){
            divSelected.setAttribute('my-value',listOptions[0].getAttribute('value'))
            divSelected.innerText = listOptions[0].innerText

        }
    
    //tao ul li
    var ulElement = document.createElement('ul');
        ulElement.classList.add('list-options')

    //duyet tung listOptions
    listOptions.forEach(function(optionEl,index){
        var valueOption = optionEl.getAttribute('value');
        var textOption  = optionEl.innerText;

        //check co selected hay ko de tjay doi
        if(optionEl.getAttribute('selected') !== null){
            divSelected.setAttribute('my-value',valueOption)
            divSelected.innerText = textOption;
        }

        var liElement = document.createElement('li');
            liElement.setAttribute('my-value',valueOption);
            liElement.innerText = textOption;

            liElement.addEventListener('click',function(e){
                
                divSelected.setAttribute('my-value',this.getAttribute('my-value'));
                divSelected.innerText = this.innerText;

        
                var selectString = `option[value=${this.getAttribute('my-value')}]`

                
                if(select.querySelector('option[selected]')){
                    select.querySelector('option[selected]').removeAttribute('selected')
                }
                
                select.querySelector(selectString).setAttribute('selected',true);

                //listOptions[index].setAttribute('selected',true)
                // selectString.setAttribute('selected',true)
                
            })
            ulElement.append(liElement)

    })

    //appending
    divWrapper.append(divSelected);
    divWrapper.append(ulElement);
    document.body.appendChild(divWrapper);


    //chen div wrapper vao truoc hoac sau
    select.parentNode.insertBefore(divWrapper,select.nextSibling);

}

