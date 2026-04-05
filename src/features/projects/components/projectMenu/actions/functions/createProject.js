import projectSchema from "../../../projectElement/index.js";
import Project from "../../../../models/Project.js"
import projects from "Projects";
import core from "Core";

const projectAdd = document.querySelector("#projectAdd");

//Remove pointer from previous pointed project


function createProject(inputs){

    let newProject = null;
    if(inputs[0].value.toLowerCase() === 'default'){
        throw new Error('Title name cannot be default')
    }
    if(inputs instanceof Project){
        newProject = inputs
        
    }else{
        newProject = new Project(inputs[0].value)
    }

    document.body.querySelector('.app-container').querySelectorAll('.task').forEach((task) => {
      task.remove()
    })

    projects.ProjectHandling.setCurrentProject(newProject);

    console.log(newProject)
    document.querySelector('.header__project-title').textContent = newProject.title;
    document.querySelector('.projects__project-pointer').remove();

    


    let projectElement = core.utils.dom.parseSchema(projectSchema(newProject));

    projectAdd.before(projectElement)
}

export default createProject;