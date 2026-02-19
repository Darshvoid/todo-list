import { ValidationError } from "../../utilities/utility.js";
import * as Datefns  from "date-fns"

class Task {
    #id = crypto.randomUUID()
    _title = null;
    _dueDate = null;
    _priority = null;
    _status = null;
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

        this._title = title
    };

    get title(){return this._title};
    
    set dueDate(dueDate){
        if(!Datefns.isDate(dueDate)){
            throw new TypeError(`Invalid type must be date object from Date class`)
        }

        if(!Datefns.isValid(dueDate)){
            throw new ValidationError('Invalid date format. See MDN documentation for supported date patterns.')
        }

        this._dueDate = dueDate
    };

    get dueDate() {return this._dueDate};

    set priority(priority){
        
        const validPriorities = ['low', 'medium', 'high'];
        
        if(!validPriorities.includes(priority)){
            throw new ValidationError(`Invalid priority value: ${priority}. Valid values: low, medium, high.`);
            
        }

        this._priority = priority
    };

    get priority(){return this._priority};

    set status(status){
        const validStates = ['unstarted', 'ongoing', 'completed']
        if(!validStates.includes(status)){
            throw new ValidationError(`Invalid status value: ${status}. Valid values: unstarted, ongoing, completed.`);
        }
        
        this._status = status
    };

    get status(){return this._status};
}

export default Task;