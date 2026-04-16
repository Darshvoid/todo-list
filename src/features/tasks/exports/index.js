import Task from "../models/Task.js";
import { createTask } from "../components/taskMenuElement/actions/functions/createTask.js";
import icon from "../components/taskElement/icons/js/index.js";

const tasks = {
    Task,
    createTask,
    icon
}

export default tasks;