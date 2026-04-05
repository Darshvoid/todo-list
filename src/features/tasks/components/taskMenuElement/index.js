import core from "Core";
import "./index.css"
import icon from "./icons/js/index.js";
import taskMenuActions from "./actions/exports/index.js";
import * as taskMenuUtility from "./utility/handleSelection.js";
import projects from "Projects";


function taskMenuSchema(onConfirm, onClose, onCreation){

    return core.components.inputMenuSchema({
                        menuTitleOption: {
                            parentElement: 'div',
                            classes: 'menu__option',
    
                            children: {
                                menuTitleOptionTitle: {
                                    element: 'h2',
                                    classes: 'menu__option-title',
                                    textContent: 'Task Title'
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
                        },
    
                        menuPriorityOption: {
                            parentElement: 'div',
                            classes: 'menu__option',
    
                            children: {
    
                                menuPriorityOptionTitle: {
                                    element: 'h2',
                                    classes: 'menu__option-title',
                                    textContent: 'Task Priority'
                                },
    
                                menuPriorityContainer: {
                                    parentElement: 'div',
                                    classes: 'task_priority-container priority-options',
                                    id: 'prioritiesInput',
    
                                    children: {
                                        priorityInput: {
                                            element: 'input',
                                            id: 'priority-input'
                                        },
    
                                        priorityLowButton: {
                                            parentElement: 'button',
                                            classes: 'priority-option',
                                            type: 'button',

                                            event: {
                                                type: 'click',
                                                fn(){
                                                    taskMenuUtility.handlePrioritySelection(this, false)
                                                }
                                            },
    
                                            children: {
                                                priorityLowTitle: {
                                                    element: 'p',
                                                    classes: 'priority-option__title',
                                                    textContent: 'Low'
                                                },
    
                                                priorityLowDecoration: {
                                                    parentElement: 'div',
                                                    classes: 'priority-option__decoration',
                                                    id: 'priority-option--low'
                                                },
    
                                                priorityLowIcon: {
                                                    element: 'img',
                                                    classes: 'priority-option__icon',
                                                    src: icon.priorityLow
                                                }
                                            }
                                        },
    
                                        priorityMediumButton: {
                                            parentElement: 'button',
                                            classes: 'priority-option',
                                            type: 'button',

                                            event: {
                                                type: 'click',
                                                fn(){
                                                    taskMenuUtility.handlePrioritySelection(this, false)
                                                }
                                            },
    
                                            children: {
                                                priorityMediumTitle: {
                                                    element: 'p',
                                                    classes: 'priority-option__title',
                                                    textContent: 'Medium'
                                                },
    
                                                priorityMediumDecoration: {
                                                    parentElement: 'div',
                                                    classes: 'priority-option__decoration',
                                                    id: 'priority-option--medium'
                                                },
    
                                                priorityMediumIcon: {
                                                    element: 'img',
                                                    classes: 'priority-option__icon',
                                                    src: icon.priorityMedium
                                                }   
                                            }
                                        },
    
                                        priorityHighButton: {
                                            parentElement: 'button',
                                            classes: 'priority-option',
                                            type: 'button',

                                            event: {
                                                type: 'click',
                                                fn(){
                                                    taskMenuUtility.handlePrioritySelection(this, false)
                                                }
                                            },
    
                                            children: {
                                                priorityHighTitle: {
                                                    element: 'p',
                                                    classes: 'priority-option__title',
                                                    textContent: 'High'
                                                },
    
                                                priorityHighDecoration: {
                                                    parentElement: 'div',
                                                    classes: 'priority-option__decoration',
                                                    id: 'priority-option--high'
                                                },
    
                                                priorityHighIcon: {
                                                    element: 'img',
                                                    classes: 'priority-option__icon',
                                                    src: icon.priorityHigh
                                                }
                                            }
                                        }
    
                                    }
                                }
                            }
                        },
    
                        menuStatusOption: {
                            parentElement: 'div',
                            classes: 'menu__option',
    
                            children: {
    
                                menuStatusOptionTitle: {
                                    element: 'h2',
                                    classes: 'menu__option-title',
                                    textContent: 'Task Status'
                                },
    
                                menuStatusContainer: {
                                    parentElement: 'div',
                                    classes: 'menu_status-container status-options',
                                    id: 'statusInput',
    
                                    children: {
                                        statusInput: {
                                            element: 'input',
                                            id: 'status-input'
                                        },
                                        statusUnstartedButton: {
                                            parentElement: 'button',
                                            classes: 'status-option',
                                            type: 'button',
                                            event: {
                                                type: 'click',
                                                fn(){
                                                    taskMenuUtility.handleStatusSelection(this, false)
                                                }
                                            },
    
                                            children: {
                                                statusUnstartedTitle: {
                                                    element: 'p',
                                                    classes: 'status-option__title',
                                                    textContent: 'Unstarted'
                                                },
    
                                                statusUnstartedDecoration: {
                                                    parentElement: 'div',
                                                    classes: 'status-option__decoration',
                                                    id: 'status-option--unstarted',
                                                },
    
                                                statusUnstartedIcon: {
                                                    element: 'img',
                                                    classes: 'status-option__icon',
                                                    src: icon.statusUnstarted
                                                }
                                            }
                                        },
    
                                        statusOngoingButton: {
                                            parentElement: 'button',
                                            classes: 'status-option',
                                            type: 'button',
                                            event: {
                                                type: 'click',
                                                fn(){
                                                    taskMenuUtility.handleStatusSelection(this, false)
                                                }
                                            },
    
                                            children: {
                                                statusOngoingTitle: {
                                                    element: 'p',
                                                    classes: 'status-option__title',
                                                    textContent: 'Ongoing'
                                                },
    
                                                statusOngoingDecoration: {
                                                    parentElement: 'div',
                                                    classes: 'status-option__decoration',
                                                    id: 'status-option--ongoing',
                                                },
    
                                                statusOngoingsIcon: {
                                                    element: 'img',
                                                    classes: 'status-option__icon',
                                                    src: icon.statusOngoing
                                                }   
                                            }
                                        },
    
                                        statusCompletedButton: {
                                            parentElement: 'button',
                                            classes: 'status-option',
                                            type: 'button',
                                            event: {
                                                type: 'click',
                                                fn(){
                                                    taskMenuUtility.handleStatusSelection(this, false)
                                                }
                                            },
    
                                            children: {
                                                statusCompletedTitle: {
                                                    element: 'p',
                                                    classes: 'status-option__title',
                                                    textContent: 'Completed'
                                                },
    
                                                statusCompletedDecoration: {
                                                    parentElement: 'div',
                                                    classes: 'status-option__decoration',
                                                    id: 'status-option--completed',
                                                },
    
                                                statusCompletedIcon: {
                                                    element: 'img',
                                                    classes: 'status-option__icon',
                                                    src: icon.statusCompleted
                                                }
                                            }
                                        },
                                        
    
                                    }
                                }
                            }
                        },
    
                        menuDueDateOption: {
                            parentElement: 'div',
                            classes: 'menu__option',
    
                            children: {
    
                                menuDueDateTitle: {
                                    element: 'h2',
                                    classes: 'menu__option-title',
                                    textContent: 'Task Due Date'
                                },
    
                                menuDueDateContainer: {
                                    parentElement: 'div',
                                    classes: 'menu__container',
    
                                    children: {
                                        menuDueDateInput: {
                                            element: 'input',
                                            classes: 'menu__input',
                                            id: 'dueDateInput',
                                            type: 'text',
                                            placeholder: 'MM/DD/YYYY',
                                        },
    
                                        menuDueDateIcon: {
                                            element: 'img',
                                            classes: 'menu__input-icon',
                                            src: icon.calendar
                                        }
                                    }
                                }
                            }
                        }
},(inputs) => {

    if(onConfirm){
        onConfirm(inputs)

        return
    }

    let task = taskMenuActions.createTask(inputs)
    const currentProject = projects.ProjectHandling.getCurrentProject();
    currentProject.attachTaskToProject(task);

}, () => {
    if(onClose){
        onClose()
        return
    }
    
    console.log('Closing menu')

}, (menuContext) => {

    if(onCreation){
        onCreation(menuContext)
        return
    }
    
    
}) 
}




export default taskMenuSchema;