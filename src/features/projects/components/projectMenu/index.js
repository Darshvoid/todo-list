import core from "Core";
import icon from "../projectElement/icons/js/index.js";
import projectMenuActions from "./actions/index.js";


function projectMenu(onConfirm, onClose, onCreation){
    return core.components.inputMenuSchema({
        menuTitleOption: {
            parentElement: 'div',
            classes: 'menu__option',

            children: {
                menuTitleOption: {
                    element: 'h2',
                    classes: 'menu__option-title',
                    textContent: 'Project Title'
                },

                menuTitleContainer: {
                    parentElement: 'div',
                    classes: 'menu__container',

                    children: {
                        menuTitleInput: {
                            element: 'input',
                            classes: 'menu__input',
                            type: 'text',
                            id: 'titleInput',
                            required: true
                        },

                        menuTitleInputIcon: {
                            element: 'img',
                            classes: 'menu__input-icon',
                            src: icon.textBox
                        }
                    }
                }
            }
        }
    }, (inputs)=> {
        if(onConfirm){
            onConfirm(inputs)
            return
        }
        projectMenuActions.createProject(inputs);
    },
    ()=>{
        if(onClose){
            onClose()
            return
        }
    },
    (menuContext)=> {
        if(onCreation){
            onCreation(menuContext)
            return
        }
    }
)
}


export default projectMenu;