let parentElementArray = [];
let currentDepth = 0;



function checkIfVisited(depth, array){
    for(let i = 0; i < array.length; i++){
        if(array[i].depth === depth){
            return true
        }
    }

    return false
}

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

        if(node.toLocaleLowerCase().includes('textcontent')){

            if(tree.parentElement){
               tree.parentElement.textContent = tree[node]
            }else{
                tree.element.textContent = tree[node]
            }

            delete tree[node];
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



function createDomHierarchy(tree){
    for(let node in tree){
        console.log(tree[node])
        console.log(currentDepth)


        if(node.includes('parentElement') ){
            parentElementArray.push({el:tree[node], depth:currentDepth});
            if(parentElementArray.length > 1 && currentDepth !== parentElementArray.at(-2).depth){
                parentElementArray.at(-2).el.appendChild(tree[node]);
            }
            continue
        }

        if(node.includes('element')){
            parentElementArray.at(-1).el.appendChild(tree[node])
        }

        if(typeof tree[node] === typeof {} && !(tree[node] instanceof HTMLElement)){
            currentDepth++
            createDomHierarchy(tree[node])
        }

        if(!(tree[node] instanceof HTMLElement)){
            if(checkIfVisited(currentDepth, parentElementArray)){
                parentElementArray.pop()
            }
            currentDepth--;

        }
    }
}

function parseDOMSchema(domSchema){
    parseElementStrings(domSchema);
    parseAttributeSrings(domSchema);
    createDomHierarchy(domSchema)
    return domSchema;
}

export default parseDOMSchema;