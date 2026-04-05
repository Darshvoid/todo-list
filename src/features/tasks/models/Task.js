import core from "Core"

class Task {
    _id = `task-${crypto.randomUUID()}`
    _title = null;
    _dueDate = null;
    _priority = null;
    _status = null;

    constructor(title, priority, status, dueDate){
        this.title = title;
        this.priority = priority;
        this.status = status
        this.dueDate = dueDate;
    }
    
    get id(){
        return this._id;
    }

    set title(title){
        if(!(typeof title === typeof " ")){
            throw new TypeError(`Title must be type string. value passed: ${typeof title}`)
        }

        if(title === ''){
            throw new Error('Title cannot be empty')
        }

        this._title = title
    };

    get title(){return this._title};
    
    set dueDate(dueDate){
        
        let tempDate = new Date(dueDate);

        if(dueDate === ''){
            throw new Error('Date cannot be empty.');
        }

        if(core.lib.isPast(tempDate)){
            throw new Error('Date must be current or future.')
        }
        
        if(!core.lib.isExists(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDay())){
            throw new ValidationError("Date doesn't exist.")
        }

        this._dueDate = dueDate
    };

    get dueDate() {return this._dueDate};

    set priority(priority){
        
        if(priority === ''){
            throw new Error('No priority selected');
        }

        const validPriorities = ['low', 'medium', 'high'];
        
        if(!validPriorities.includes(priority.toLowerCase())){
            throw new ValidationError(`Invalid priority value: ${priority}. Valid values: low, medium, high.`);
            
        }

        this._priority = priority.toLowerCase();
    };

    get priority(){return this._priority};

    set status(status){
        const validStates = ['unstarted', 'ongoing', 'completed']
        
        if(status === ''){
            throw new Error('Status not selected.');
        }

        if(!validStates.includes(status.toLowerCase())){
            throw new ValidationError(`Invalid status value: ${status}. Valid values: unstarted, ongoing, completed.`);
        }
        
        this._status = status.toLowerCase()
    };

    get status(){return this._status};

}

export default Task;