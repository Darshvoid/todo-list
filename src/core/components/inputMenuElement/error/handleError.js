import "../index.css"

function handleError(error, menu){
    console.log(error)
    if(menu.querySelector('.menu__error')){
        menu.querySelector('.menu__error').textContent = error;
        return
    }

    let errorElement = document.createElement('p');
    errorElement.textContent = error;
    errorElement.classList.add('menu__error');
    
    menu.appendChild(errorElement);
}

export default handleError;