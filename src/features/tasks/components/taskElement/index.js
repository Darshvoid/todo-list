import core from "Core"
import icon from "./icons/js/index.js"
import taskElementActions from "./actions/exports/index.js"
import "./index.css"
import projects from "Projects"



function taskSchema(task){
    
    return {
        id: task.id,
        parentElement: 'div',
        classes: 'task root',
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
                        event: {
                            type: 'click',
                            fn(){
                                taskElementActions.displayTaskNotes(task.id)
                            }
                        },
                        children: {
                            taskIconSeperator: {
                                element: 'div',
                                classes: 'task__iconseperator-view'
                            },
                            taskActionIcon: {
                                element: 'img', 
                                src: icon.actionViewNotes,
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
                                event: {
                                    type: 'click',
                                    fn(){
                                        this.parentElement.parentElement.parentElement.remove()
                                        projects.ProjectHandling.removeTask(task.id);
                                    }
                                },
                                children: {
                                    taskIconSeperator: {
                                        element: 'div',
                                        classes: 'task__iconseperator-delete'
                                    },
                                    taskActionIcon: {
                                        element: 'img',
                                        src: icon.actionDelete,
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
                                                src: icon.actionDecorationLeft,
                                            }
                                        }
                                    }
                                }
                            },
                            editButton: {
                                parentElement: 'button',
                                classes: 'task__action task__action-edit',
                                type: 'button',
                                event: {
                                    type: 'click',
                                    fn(){
                                        taskElementActions.openEditMenu(task, core.utils.dom.getRootParent(this));
                                    }
                                },
                                children: {
                                    taskIconSeperator: {
                                        element: 'div',
                                        classes: 'task__iconseperator-edit'
                                    },
                                    taskActionIcon: {
                                        element: 'img',
                                        src: icon.actionEdit,
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
                                                src: icon.actionDecorationRight
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
                                textContent: `Due: ${task.dueDate}`
                            },
                            taskDateIcon: {
                                element: 'img',
                                classes: 'task__date-icon',
                                src: icon.calendar
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
                                src: icon[`priority${core.utils.general.capitalizeFirstLetter(task.priority)}`]
                            },
                            taskPriorityType: {
                                element: 'p',
                                classes: 'task__priority-type',
                                textContent: core.utils.general.capitalizeFirstLetter(task.priority)
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
                                classes: 'task__status-icon',
                                src: icon[`status${core.utils.general.capitalizeFirstLetter(task.status)}`]
                            },
                            taskStatusType: {
                                element: 'p',
                                classes: 'task__status-type',
                                textContent: core.utils.general.capitalizeFirstLetter(task.status)
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




export default taskSchema;
