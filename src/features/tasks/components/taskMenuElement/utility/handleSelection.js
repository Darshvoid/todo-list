import core from "Core"
let previousPriorityElement = null;
let previousStatusElement = null;

function handlePrioritySelection(element){
    const parent = core.utils.dom.getRootParent(element)
    const priorityInput = parent.querySelector('#priority-input')
    
    if(document.querySelector('.priority-option__decoration--selected')){
        document.querySelector('.priority-option__decoration--selected').classList.remove('priority-option__decoration--selected')
    }
    
    priorityInput.value = element.textContent;

    
    element.classList.toggle('priority-option--selected');
    element.querySelector('.priority-option__decoration').classList.toggle('priority-option__decoration--selected')


    if(previousPriorityElement !== null && previousPriorityElement !== element){
        previousPriorityElement.classList.remove('priority-option--selected');
        previousPriorityElement.querySelector('.priority-option__decoration').classList.remove('priority-option__decoration--selected')

    }

    previousPriorityElement = element;
}

function handleStatusSelection(element, edit){
    const parent = core.utils.dom.getRootParent(element)
    const statusInput = parent.querySelector('#status-input')

    if(document.querySelector('.status-option__decoration--selected')){
        document.querySelector('.status-option__decoration--selected').classList.remove('status-option__decoration--selected')
    }
    
    statusInput.value = element.textContent;


    element.classList.toggle('status-option--selected');
    element.querySelector('.status-option__decoration').classList.toggle('status-option__decoration--selected')


    if(previousStatusElement !== null && previousStatusElement !== element){
        previousStatusElement.classList.remove('status-option--selected');
        previousStatusElement.querySelector('.status-option__decoration').classList.remove('status-option__decoration--selected')

    }

    previousStatusElement = element;
}


export {handlePrioritySelection, handleStatusSelection}