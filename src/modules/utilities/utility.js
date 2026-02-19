// DOM HANDLING UTILS
let previousNodeParent = null

const domUtils = {
    createElement(type, content, attributesObj){
        let newElement = document.createElement(type)
        for (key in attributesObj){
            newElement.setAttribute(key, attributesObj[key])
        }
    },

    renderElementTree(tree){
        for(let node in tree){
            if(previousNodeParent === null){
                previousNodeParent = tree.parentElement;
            }else if(node.includes("parentElement")){
                previousNodeParent.appendChild(tree[node]);
            }else if(node.includes("childrenObject")){
                previousNodeParent = tree.parentElement;
            }
            
            if(node.includes("parentObject") || node.includes("childrenObject")){
                this.renderElementTree(tree[node])
            }else if(tree?.parentElement && node.includes("childElement")){
                tree.parentElement.appendChild(tree[node]);
            }else if(node.includes("childElement")){
                previousNodeParent.appendChild(tree[node]);
            }

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
let l = {
  parent: { 
    parentElement: document.createElement('div'), //previousNodeParent.
    parentObject1:{ 
        parentElement: document.createElement('aside'), //append to previousNodeParent.
        childrenObject: { //set previousNodeParent to ParentElement
            childElement1: document.createElement('a'), //append to previousNodeParent or parentElement if obj.parentElement exist.
            parentObject: {
                parentElement: document.createElement('button'),
                childElement: document.createElement('img')
            },
        },
        childElement: document.createElement('span') //append to previousNodeParent or parentElement if obj.parentElement exist.
    },
    childrenObject: { //set previousNodeParent to ParentElement
        childElement1: document.createElement('p'),
        childElement2: document.createElement('p'),
        parentObject1: {
            parentElement: document.createElement('div'),
            parentObject: {
                parentElement: document.createElement('main')
            },
            childElement: document.createElement('a')
        },
        parentObject2: {
            parentElement1: document.createElement('div'),
            childElement2: document.createElement('p')
        }
    }
  },
}


domUtils.renderElementTree(l.parent)
console.log(l.parent.parentElement)
export { ValidationError, domUtils }