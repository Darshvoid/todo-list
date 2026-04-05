import * as Datefns  from "date-fns"


function create(date){
    let result = Datefns.format(new Date(date), 'MM-dd-yyyy')
    return result
}

function isValid(date){
    return Datefns.isValid(date)
}

function isDate(date){
    return Datefns.isDate(date)
}

function isExists(year, month, day){

    return Datefns.isExists(year, month, day)
}

function isPast(date){
    let tempDate = (new Date(date));
    let currentDate = new Date(Date.now())
    
    if(
        tempDate.getFullYear() === currentDate.getFullYear() && 
        tempDate.getMonth() === currentDate.getMonth() && 
        tempDate.getDate() === currentDate.getDate()
    ){
        return false;
    }

    return Datefns.isPast(date);
}

function isEqual(date){
    return Datefns.isEqual(date);
}

export {create, isValid, isDate, isExists, isPast, isEqual};