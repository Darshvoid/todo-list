import core from "Core";
import Task from "../../../../models/Task.js";
import taskSchema from "../../../taskElement/index.js";
import projects from "Projects"

document.querySelector('.current-project')

function createTask(inputs){
    let taskAdd = document.querySelector('.task-add__button');
    try{
        let newTask = null
        if(inputs instanceof Task){
            newTask = inputs
        }else{
            newTask = new Task(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value)
        }

            
        let taskEl = taskSchema(newTask)

        console.log(projects.ProjectHandling.getCurrentProject());

        
        taskAdd.before(core.utils.dom.parseSchema(taskEl));
        return newTask
    }catch(e){
       throw new Error(e.message);
    }
}




export {createTask}