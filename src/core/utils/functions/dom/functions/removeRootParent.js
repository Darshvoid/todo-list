function removeRootParent(element){    
    let i = 0
    while(true){
        let stringToAdd = '?.parentElement';
        let string = `element${stringToAdd.repeat(i)}`
        if(eval(string).classList.contains('root') || eval(string) === undefined || eval(string) === null){
            eval(string).remove()
            return
        }
        
        i++
    }

}

export default removeRootParent;