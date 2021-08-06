var classPlugin        = 'custom-select';
var classWrapperSelect = 'wrapper-selected';
var classSelected      = 'selected';
var classListOptions   = 'list-options';
var classOpen          = 'open';
var attrValue          = 'my-value'

var listSelect = Array.from(document.querySelectorAll('.' + classPlugin))

    listSelect.forEach(function(select){

        var listOptions = Array.from(select.querySelectorAll('option'));
    
         //tao div bao
        var divWrapper  = document.createElement('div');
            divWrapper.classList.add(classWrapperSelect);

        
        //tao div select
        var divSelected = document.createElement('div');
        divSelected.classList.add(classSelected);

        divSelected.addEventListener('click',function(){
            //tat mo div
            this.parentElement.classList.toggle(classOpen)
 
        })

        if(listOptions.length > 0){
            divSelected.setAttribute(attrValue  ,listOptions[0].getAttribute('value'))
            divSelected.innerText = listOptions[0].innerText

        }


        //tao ul li
        var ulElement = document.createElement('ul');
        ulElement.classList.add(classListOptions )

        listOptions.forEach(function(optionEl,index){
            var valueOption = optionEl.getAttribute('value');
            var textOption  = optionEl.innerText;

            //check co selected hay ko de tjay doi
            if(optionEl.getAttribute('selected') !== null){
                divSelected.setAttribute(attrValue,valueOption)
                divSelected.innerText = textOption;
            }

            var liElement = document.createElement('li');
            liElement.setAttribute(attrValue,valueOption);
            liElement.innerText = textOption;
            liElement.addEventListener('click',function(){
                divSelected.setAttribute(attrValue,this.getAttribute(attrValue));
                divSelected.innerText = this.innerText;

                if(select.querySelector('option[selected]')){
                    select.querySelector('option[selected]').removeAttribute('selected')
                }
                // var selectString = `option[value=${this.getAttribute('my-value')}]`
                // select.querySelector(selectString).setAttribute('selected',true);
                listOptions[index].setAttribute('selected',true)
                this.parentElement.parentElement.classList.remove(classOpen)
            })

            ulElement.append(liElement)
        })

        divWrapper.append(divSelected);
        divWrapper.append(ulElement);
        document.body.appendChild(divWrapper);

        select.parentNode.insertBefore(divWrapper,select);

        document.addEventListener('click',function(e){
            var check = e.target.closest('.' + classWrapperSelect);
    
            
            if(check == null){
                divWrapper.classList.remove(classOpen)
            }
            
        })
    })


