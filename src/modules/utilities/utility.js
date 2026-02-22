
// ERROR EXTENDING UTILS
class ValidationError extends Error{
    constructor(...params){
        super(...params);
        this.name = 'ValidationError';
    }
}

function capitalizeFirstLetter(string){
    return string.slice(0,1).toUpperCase() + string.slice(1)  
}


// console.log(l.parent.parentElement)
export { ValidationError, capitalizeFirstLetter}