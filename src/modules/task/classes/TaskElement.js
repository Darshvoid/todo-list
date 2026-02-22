import Task from "./Task.js";
import * as Datefns  from "date-fns"
import parseDOMSchema from "../../dom/DOMSchemaParser.js";
import {capitalizeFirstLetter} from '../../utilities/utility.js'


const taskElements = []

let mainContent = document.querySelector('.main-content')
let taskAdd = document.querySelector('.task-add')


function TaskElement(task){
    if (!(task instanceof Task))
        throw new Error('argument must be an instance of Task')

    
    
    return {
    id: task.id,
    parentElement: 'div',
    classes: 'task',
    background: `linear-gradient(to right,var(--${task.priority}) 35%, var(--${task.status}) 100%)`,

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
        taskInfo: {
            parentElement: 'div',
            classes: 'task__info',
            children: {
                taskTitle: {
                    element: 'h2',
                    classes: 'task__title',
                    textContent: task.title
                },
                taskInfoDivider: {
                    element: 'div',
                    classes: 'task__info-divider',
                },
                taskDateContainer: {
                    parentElement: 'div',
                    classes: 'task__date-container',
                    children: {
                        taskDate: {
                            element: 'p',
                            classes: 'task__date',
                            textContent: `Due: ${Datefns.format(task.dueDate, 'MM/dd/yyyy')}`
                        },
                        taskDateIcon: {
                            element: 'img',
                            classes: 'task__date-icon',
                            src: 'icons/calendar-week--grey.svg'
                        }
                    }
                }
            }
        },
        taskStats: {
            parentElement: 'div',
            classes: 'task__stats',
            children: {
                taskPriority: {
                    parentElement: 'div',
                    classes: 'task__priority',
                    children: {
                        taskPriorityTitle: {
                            element: 'p',
                            classes: 'task__priority-title',
                            textContent: 'Priority'
                        },
                        taskPriorityIcon: {
                            element: 'img',
                            classes: 'task__priority-icon',
                            src: `icons/priority-${task.priority}.svg`
                        },
                        taskPriorityType: {
                            element: 'p',
                            classes: 'task__priority-type',
                            textContent: capitalizeFirstLetter(task.priority)
                        },
                        taskPriorityUnderlight: {
                            element: 'div',
                            classes: `task__priority-underlight task__priority-underlight--${task.priority}`
                        }
                    }
                },
                taskStatus: {
                    parentElement: 'div',
                    classes: 'task__status',
                    children: {
                        taskStatusTitle: {
                            element: 'p',
                            classes: 'task__status-title',
                            textContent: 'Status'
                        },
                        taskStatusIcon: {
                            element: 'img',
                            classes: 'task_status-icon',
                            src: `icons/status-${task.status}.svg`
                        },
                        taskStatusType: {
                            element: 'p',
                            classes: 'task__status-type',
                            textContent: capitalizeFirstLetter(task.status)
                        },
                        taskStatusUnderline: {
                            element: 'div',
                            classes: `task__status-underlight task__status-underlight--${task.status}`
                        }
                    }
                }
            }
        }
    }
    }
}

let a = new Task("Studying react",new Date('4/22/26'),"low","completed")
let b = new Task("Study JSX",new Date('7/22/26'),"medium","completed")
let c = new Task("Finish modules",new Date('5/22/26'),"high","completed")

let d = new Task("Studying react",new Date('4/22/26'),"low","ongoing")
let e = new Task("Study JSX",new Date('7/22/26'),"medium","ongoing")
let f = new Task("Finish modules",new Date('5/22/26'),"high","ongoing")

let g = new Task("Studying react",new Date('4/22/26'),"low","unstarted")
let i = new Task("Study JSX",new Date('7/22/26'),"medium","unstarted")
let h = new Task("Finish modules",new Date('5/22/26'),"high","unstarted")

function createDOMReadyTask(task){
    let newTaskElement = new TaskElement(task)
    let elementReadyTask = parseDOMSchema(newTaskElement)

    
    mainContent.insertBefore(elementReadyTask.parentElement, taskAdd);
}



createDOMReadyTask(a)
createDOMReadyTask(b)
createDOMReadyTask(c)
createDOMReadyTask(d)
createDOMReadyTask(e)
createDOMReadyTask(f)
createDOMReadyTask(g)
createDOMReadyTask(i)
createDOMReadyTask(h)
