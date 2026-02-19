
// DOM HANDLING UTILS
let previousNodeParent = null

//returns dom element
function parseDOMSchema(node){
    for(let key in node){
        if(key === 'element'){
            document.createElement(node[key])
        }
        
        if(key === 'children'){
            node
        }
    
    }
}



// ERROR EXTENDING UTILS
class ValidationError extends Error{
    constructor(...params){
        super(...params);
        this.name = 'ValidationError';
    }
}

// ONLY HAVE 1 ROOT PARENT, IF NESTED THEN CAN HAVE INFINITE.
let task = {
    element: 'div',
    class: 'task',

    children:{
        taskActions: {
            element: 'div',
            classes: 'task__actions',
            children:{
                viewNotesButton: {
                    element: 'button',
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
                            textContext: 'View Notes'
                        }
                    }
                },
    
                flexWrapper: {
                    class: "flex-wrapper gap md",
    
                    children: {
                        deleteButton:{
                            element: 'button',
                            classes: 'task__action task__action-delete',
                            type: 'button',
                            children: {
                                taskIconSeperator: {
                                    element: 'div',
                                    classes: 'task__iconseperator-delete'
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}


// domUtils.renderElementTree(l.parent)
// console.log(l.parent.parentElement)
export { ValidationError, domUtils }