function getRootParent(element){    
    try{
        let i = 0
        while(true){
            let stringToAdd = '?.parentElement';
            let string = `element${stringToAdd.repeat(i)}`
            if(eval(string).classList.contains('root') || eval(string) === undefined || eval(string) === null){
                console.log(eval(string))
                return eval(string)
            }
            
            i++
        }
    }catch(e){
        console.log(e)
    }


}

export default getRootParent;