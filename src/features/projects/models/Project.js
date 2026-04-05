class Project{
    tasks = []
    _id = `project-${crypto.randomUUID()}`
    _title = null
    constructor(title){
        this.title = title;
    }

    attachTaskToProject(task){
        this.tasks.push(task)
    }


    set title(title){
        if(title === ''){
            throw new Error('Title cannot be empty')
        }




        this._title = title;
    }
    
    get title(){return this._title};

    get id(){return this._id}

}

export default Project;