import Task from "./Task.js";
import { parseDOMSchema } from "../../utilities/utility.js";

const taskElements = []


function TaskElement(task){
    if (!(task instanceof Task))
        throw new Error('argument must be an instance of Task')

    
    

}

let newEl = TaskElement(new Task("z",new Date(),"low","ongoing"))