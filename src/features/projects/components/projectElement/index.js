import core from "Core"
import icon from "./icons/js/index.js";
import projects from "Projects";
import projectMenu from "../projectMenu/index.js";
import openEditMenu from "./actions/editProject.js";

function projectSchema(project){
    
    return {
            parentElement: 'div',
            classes: 'projects__project root',
            id: project.id,
            event: {
                type: 'click',
                fn(e){

                    document.querySelector('.projects__project-pointer').remove()
                    document.querySelector('.header__project-title').textContent = project.title;

                    
                    let newPointer = core.utils.dom.parseSchema({
                        parentElement: 'img',
                        classes: 'projects__project-pointer',
                        src: icon.projectPointer
                    })
                    this.firstChild.appendChild(newPointer);

                    projects.ProjectHandling.unloadProject()
                    projects.ProjectHandling.loadProject(project)
                }
            },
            oncontextmenu(e){
                e.preventDefault()

                if(e.which === 3){
                    console.log('hi')
                    openEditMenu(project, core.utils.dom.getRootParent(this))
                }
            },

            onmousedown(e){
                e.preventDefault()
                if(e.button === 1 && project.title.toLowerCase() !== 'default'){
                    projects.ProjectHandling.removeProject(project.id);
                    this.remove()

                    let newPointer = core.utils.dom.parseSchema({
                        parentElement: 'img',
                        classes: 'projects__project-pointer',
                        src: icon.projectPointer
                    })
                    let defaultProject = document.querySelector('#default')
                    defaultProject.firstChild.appendChild(newPointer);
                }
            },
            
            children: {
                rectangle:{
                    parentElement: 'div',
                    classes: 'rectangle',
                    children: {
                        vertical: {
                            element: 'div',
                            classes: project.title.toLowerCase() === 'default' ?  'vertical-first' : 'vertical' 
                        },
                        horizontal: {
                            element: 'div',
                            classes: 'horizontal'
                        },
                        projectText: {
                            element: 'p',
                            classes: 'projects__project-text',
                            textContent: project.title
                        },
                        projectPointer: {
                            element: 'img',
                            classes: 'projects__project-pointer',
                            src: icon.projectPointer
                        },


                    }
                }
            }
        }
} 

export default projectSchema;