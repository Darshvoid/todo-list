import core from "Core";
import projectMenu from "../../projectMenu/index.js";
function openEditMenu(project, projectElement){

    function updateProject (inputs) {


        project.title = inputs[0].value;


        projectElement.querySelector('.projects__project-text').textContent = project.title;
        
    }

    function updateProjectMenu(){
        editMenu.querySelector('#titleInput').value = project.title
    }
    const editMenu = core.utils.dom.parseSchema(projectMenu(updateProject, false, updateProjectMenu))
    


    document.body.firstChild.before(editMenu)
    core.ui.blurBackground.on()
}


export default openEditMenu;