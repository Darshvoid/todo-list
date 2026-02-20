
// DOM HANDLING UTILS
let currentParentElement = null;
let parentElementArray = [];
let currentDepth = 0;

let traversed = false;
//returns dom element

function parseElementStrings(tree){
    for(let node in tree){

        if(typeof tree[node] === typeof {}){
            parseElementStrings(tree[node])
        }

        if(node.toLowerCase().includes('element')){
            let replaceNodeValue = document.createElement(tree[node]);
            tree[node] = replaceNodeValue;
        }


    }
}

function parseAttributeSrings(tree){

    for(let node in tree){
        if(node.toLowerCase().includes('classes')){

            let classesArray = tree[node].split(" ");

            if(tree.parentElement){
               tree.parentElement.classList.add(...classesArray) 
            }else{
                tree.element.classList.add(...classesArray)
            }
            
            delete tree[node]
        }

        if(!(tree[node] instanceof HTMLElement) && typeof tree[node] === typeof ''){
            if(tree.parentElement){
                tree.parentElement.setAttribute(node, tree[node])
                delete tree[node]
            }else{
                tree.element.setAttribute(node, tree[node])
                delete tree[node]
            }
        }

        if(typeof tree[node] === typeof {} && !(tree[node] instanceof HTMLElement)){
            parseAttributeSrings(tree[node])
        }
    }

}

function parseDOMSchema(tree){
    for(let node in tree){
        if(node.includes('parentElement') ){
            parentElementArray.push(tree[node]);
            continue
        }

        if(typeof tree[node] === typeof {} && !(tree[node] instanceof HTMLElement)){
            console.log(currentDepth);
            console.log(tree[node])
            currentDepth++
            parseDOMSchema(tree[node])
        }

        if(!(tree[node] instanceof HTMLElement)){

            currentDepth--;
        }
    }
}


// ONLY HAVE 1 ROOT PARENT, IF NESTED THEN CAN HAVE INFINITE.
let task = {
    parentElement: 'div', //append to pparrent array
    classes: 'task',

    children:{ 
        taskActions: {
            parentElement: 'div', // append to currentParentElemen
            classes: 'task__actions',
            children:{ //set currentParentElement1 ^^
                viewNotesButton: {
                    parentElement: 'button', //append to currentParentElement1
                    classes: 'task__action task__action-notes',
                    type: 'button',
                    children: { //set currentParentElement2
                        taskIconSeperator: {
                            element: 'div', //append currentParentElement2
                            classes: 'task__iconseperator-view'
                        },
                        taskActionIcon: {
                            element: 'img', //append currentParentElement2
                            src: 'icons/view.svg',
                            classes: "task__action-icon task__view-icon"
                        },
                        taskActionText: {
                            element: 'p', //append currentParentElement2
                            textContext: 'View Notes'
                        }
                    }
                }
            },
        },
        flexWrapper: {
            parentElement:'div', //append currentParentElement2
            classes: "flex-wrapper gap md",

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
parseElementStrings(task);
parseAttributeSrings(task);
parseDOMSchema(task);

// let l = {
//     "parentElement": {}, //currentParentElement0 <-- depth0
//     "children": { <-- depth1
//         "taskActions": { <-- depth2
//             "parentElement": {}, // append to currentParentElement0 
//             "children": { //make its parent element the currentParrentElement1 <-- depth3
//                 "viewNotesButton": { <-- depth4
//                     "parentElement": {}, // append to currentParentElement1 
//                     "children": { //make its parent element the currentParrentElement2 <-- depth5
//                         "taskIconSeperator": { <-- depth6
//                             "element": {} /// append to currentParentElement2 <-- depth7
//                         },
//                         "taskActionIcon": {
//                             "element": {} // append to currentParentElement2
//                         },
//                         "taskActionText": {
//                             "element": {} // append to currentParentElement2
//                         }
//                     }
//                 },
//             }    
//         },
//         "flexWrapper": { <-- depth0
//                     "parentElement": {},  // append to currentParentElement2
//                     "children": {
//                         "deleteButton": {
//                             "element": {},
//                             "children": {
//                                 "taskIconSeperator": {
//                                     "element": {}
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//     }

// }



console.log(task.parentElement.classList)
console.log(task)

export default parseDOMSchema 