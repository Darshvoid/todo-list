
// ERROR EXTENDING UTILS
class ValidationError extends Error{
    constructor(...params){
        super(...params);
        this.name = 'ValidationError';
    }
}



// console.log(l.parent.parentElement)
export { ValidationError}