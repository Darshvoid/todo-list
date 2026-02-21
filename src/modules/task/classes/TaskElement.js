import Task from "./Task.js";

import parseDOMSchema from "../../dom/DOMSchemaParser.js";
const taskElements = []


function TaskElement(task){
    if (!(task instanceof Task))
        throw new Error('argument must be an instance of Task')

    
    

}

let newEl = TaskElement(new Task("z",new Date(),"low","ongoing"))

let task = {
    parentElement: 'div',
    classes: 'task',

    children:{ 
        taskActions: {
            parentElement: 'div',
            classes: 'task__actions',
            children:{
                viewNotesButton: {
                    parentElement: 'button', 
                    classes: 'task__action task__action-notes',
                    type: 'button',
                    children: {
                        taskIconSeperator: {
                            element: 'div',
                            classes: 'task__iconseperator-view'
                        },
                        taskActionIcon: {
                            element: 'img', 
                            src: 'icons/view.svg',
                            classes: "task__action-icon task__view-icon"
                        },
                        taskActionText: {
                            element: 'p',
                            classes: 'task__action-text',
                            textContent: 'View Notes'
                        }
                    }
                },
                flexWrapper: {
                    parentElement:'div',
                    classes: "flex-wrapper gap-md",

                    children: {
                        deleteButton:{
                            parentElement: 'button',
                            classes: 'task__action task__action-delete',
                            type: 'button',
                            children: {
                                taskIconSeperator: {
                                    element: 'div',
                                    classes: 'task__iconseperator-delete'
                                },
                                taskActionIcon: {
                                    element: 'img',
                                    src: 'icons/delete.svg',
                                    classes: 'task__action-icon task__delete-icon'
                                },
                                taskActionText: {
                                    element: 'p',
                                    classes: 'margin-right-sm task__action-text',
                                    textContent: 'Delete'
                                },
                                taskActionDecoration: {
                                    parentElement: 'div',
                                    classes: 'task__action-decoration--left',
                                    children: {
                                        taskDecorationSVG: {
                                            element: 'img',
                                            classes: 'task__decoration-svg',
                                            src: 'icons/action-decoration-left.svg'
                                        }
                                    }
                                }
                            }
                        },
                        editButton: {
                            parentElement: 'button',
                            classes: 'task__action task__action-edit',
                            type: 'button',
                            children: {
                                taskIconSeperator: {
                                    element: 'div',
                                    classes: 'task__iconseperator-edit'
                                },
                                taskActionIcon: {
                                    element: 'img',
                                    src: 'icons/edit.svg',
                                    classes: 'task__action-icon task__edit-icon'
                                },
                                taskActionText: {
                                    element: 'p',
                                    classes: 'margin-left-sm task__action-text',
                                    textContent: 'Edit'
                                },
                                taskActionDecoration: {
                                    parentElement: 'div',
                                    classes: 'task__action-decoration--right',
                                    children: {
                                        taskDecorationSVG: {
                                            element: 'img',
                                            classes: 'task__decoration-svg',
                                            src: 'icons/action-decoration-right.svg'
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                }
            },
        },
    }
}

let el = parseDOMSchema(task)

let newz = document.querySelector('.main-content')
let zam = document.querySelector('.task-add')


newz.insertBefore(el.parentElement,zam);