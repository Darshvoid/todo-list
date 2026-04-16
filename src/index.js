import projectMenu from "./features/projects/components/projectMenu/index.js";
import taskMenuSchema from "./features/tasks/components/taskMenuElement/index.js";
import projects from "Projects";
import Project from "./features/projects/models/Project.js";
import Task from "./features/tasks/models/Task.js";
import taskSchema from "./features/tasks/components/taskElement/index.js";
import core from "Core";
import projectSchema from "./features/projects/components/projectElement/index.js";
import './index.css'


const appContainer = document.querySelector('.app-container');
const taskAddElement = document.querySelector('#taskAdd');
const projectAddElement = document.querySelector("#projectAdd")

const defaultProject = new Project('Default');
defaultProject._id = 'default'
let defaultProjectElement = projectSchema(defaultProject);
delete defaultProjectElement.children.rectangle.children.projectEdit
projects.ProjectHandling.setCurrentProject(defaultProject)

document.body.querySelector('#projectAdd').before(core.utils.dom.parseSchema(defaultProjectElement));


taskAddElement.addEventListener('click', () => {
   core.ui.blurBackground.on()
   document.body.firstChild.before(core.utils.dom.parseSchema(taskMenuSchema()))
})

projectAddElement.addEventListener('click', () => {
   core.ui.blurBackground.on();
   document.body.firstChild.before(core.utils.dom.parseSchema(projectMenu()))

})

window.addEventListener('beforeunload', () => {
   localStorage.setItem('Projects', JSON.stringify(projects.ProjectHandling.getProjectsArray()))
})




let allProjects = JSON.parse(localStorage.getItem('Projects'))
console.log(allProjects)

allProjects.forEach(element => {
   let tasks = element.tasks
   if(element._title.toLowerCase() === 'default'){
      let oldDefaultProject = projects.ProjectHandling.getCurrentProject();
      tasks.forEach((el)=> {
         let newTask = new Task(el._title, el._priority, el._status, el._dueDate) 
         newTask._id = el._id
         oldDefaultProject.tasks.push(newTask)
         let newTaskElement = taskSchema(newTask)

         taskAddElement.before(core.utils.dom.parseSchema(newTaskElement));
      })

   }else{
      const newProject = new Project(element._title);
      console.log(newProject)
      newProject._id = element._id
      tasks.forEach((el)=> {
         let newTask = new Task(el._title, el._priority, el._status, el._dueDate) 
         newTask._id = el._id
         newProject.attachTaskToProject(newTask)
      })
      
      
      let newProjectElement = projectSchema(newProject);
      projects.ProjectHandling.pushToProjectsArray(newProject)
      delete newProjectElement.children.rectangle.children.projectPointer
      document.body.querySelector('#projectAdd').before(core.utils.dom.parseSchema(newProjectElement));
   }


   
});




console.log(allProjects)