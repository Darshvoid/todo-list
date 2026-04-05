import taskMenuSchema from "../../../../taskMenuElement/index.js"
import core from "Core";
import icon from "../../../icons/js/index.js";


function updateStats(task, taskElement, oldInput){
    for(let i = 0; i < 2; i++){
        let stat = 'priority'
        if(i === 1){
            stat = 'status'
        }
         taskElement.querySelector(`.task__${stat}-type`).textContent = core.utils.general.capitalizeFirstLetter(task[stat]);
         taskElement.querySelector(`.task__${stat}-underlight`).classList.remove(`task__${stat}-underlight--${oldInput[i]}`)
         taskElement.querySelector(`.task__${stat}-underlight`).classList.add(`task__${stat}-underlight--${task[stat]}`)
         taskElement.querySelector(`.task__${stat}-icon`).src = icon[`${stat}${core.utils.general.capitalizeFirstLetter(task[stat])}`]
    }
}

function openEditMenu(task, taskElement){

    function updateTask(inputs){
        let oldStatus = task.status;
        let oldPriority = task.priority;

        task.title = inputs[0].value;
        task.priority = inputs[1].value;
        task.status = inputs[2].value;
        task.dueDate = inputs[3].value;

        taskElement.querySelector('.task__title').textContent = task.title;
        
        updateStats(task, taskElement, [oldPriority, oldStatus])

        taskElement.querySelector('.task__date').textContent = task.dueDate;

    }

    function updateTaskMenu(){
        editMenu.querySelector(`#status-option--${task.status}`).classList.add('status-option__decoration--selected');
        editMenu.querySelector('#status-input').value = task.status
        
        editMenu.querySelector(`#priority-option--${task.priority}`).classList.add('priority-option__decoration--selected');
        editMenu.querySelector('#priority-input').value = task.priority
        
        editMenu.querySelector(`#titleInput`).value = task.title;
        
        editMenu.querySelector(`#dueDateInput`).value = task.dueDate;
    }
    const editMenu = core.utils.dom.parseSchema(taskMenuSchema(updateTask, false, updateTaskMenu))
    


    document.body.firstChild.before(editMenu)
    core.ui.blurBackground.on()
}

export default openEditMenu;