import { ValidationError } from "./utility.js";
import * as Datefns  from "date-fns"

class Task {
    #id = crypto.randomUUID()
    #title = null;
    #dueDate = null;
    #priority = null;
    #status = null;
    constructor(title, dueDate, priority, status){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status
    }
    
    get id(){
        return this.#id;
    }

    set title(title){
        if(!(typeof title === typeof " ")){
            throw new TypeError(`Title must be type string. value passed: ${typeof title}`)
        }

        this.#title = title
    };

    get title(){return this.#title};
    
    set dueDate(dueDate){
        if(!Datefns.isDate(dueDate)){
            throw new TypeError(`Invalid type must be date object from Date class`)
        }

        if(!Datefns.isValid(dueDate)){
            throw new ValidationError('Invalid date format. See MDN documentation for supported date patterns.')
        }
    };

    get dueDate() {return this.#dueDate};

    set priority(priority){
        
        const validPriorities = ['low', 'medium', 'high'];
        
        if(!validPriorities.includes(priority)){
            throw new ValidationError(`Invalid priority value: ${priority}. Valid values: low, medium, high.`);
            
        }

        this.#priority = priority
    };

    get priority(){return this.#priority};

    set status(status){
        const validStates = ['unstarted', 'ongoing', 'completed']
        if(!validStates.includes(status)){
            throw new ValidationError(`Invalid status value: ${status}. Valid values: unstarted, ongoing, completed.`);
        }
        
        this.#status = status
    };

    get status(){return this.#status};
}


