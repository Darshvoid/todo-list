import core from "Core";
import "./index.css"
let taskNotes = []

function checkHasNotes(id){

    for (let i = 0; i < taskNotes.length; i++){
        if(taskNotes[i].id === id) return taskNotes[i].notes;
    }

    return '';
}



function pushTaskNotes(id, notes){
    for(let i = 0; i < taskNotes.length; i++){
        console.log(taskNotes[i].id, id)
        if(taskNotes[i].id === id){
            taskNotes[i].notes = notes
            return
        }
    }

    console.log
    taskNotes.push({id, notes});
}


function displayTaskNotes(id){
    const appContainer = document.querySelector('.app-container');
    core.ui.blurBackground.on()
    
    let notes = checkHasNotes(id);
    
    let elementSchema = 
    {
        parentElement: 'div',
        classes: 'notes-container',
        children: {
            notesTitle: {
                element: 'p',
                classes: 'notes-title',
                textContent: 'Notes'
            },

            noteTextArea: {
                element: 'textarea',
                classes: 'notes',
                textContent: notes
            },

            finish: {
                element: 'button',
                classes: 'notes-finish',
                textContent: 'Finish',
                event: {
                    type: 'click',
                    fn(){
                        pushTaskNotes(id, this.previousSibling.value);
                        this.parentElement.remove()
                        core.ui.blurBackground.off()
                        console.log(taskNotes)
                    }
                }
            }
        }
    }

    let newElement = core.utils.dom.parseSchema(elementSchema);
   
    document.body.firstChild.before(newElement);

    return newElement;
}

window.addEventListener('beforeunload', ()=> {
    localStorage.setItem('Notes', JSON.stringify(taskNotes));
})

//load notes from local storage

let storedNotes = JSON.parse(localStorage.getItem('Notes')) || [];


if(storedNotes.length > 0){
    storedNotes.forEach((note)=> {
        try{
            taskNotes.push(note)

            return 'successful'
        }catch(e){
            console.log(e.message);
            return 'unsuccessful'
        }
    })
}



export default displayTaskNotes;
