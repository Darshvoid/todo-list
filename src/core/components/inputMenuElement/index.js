import handleError from "./error/handleError.js"
import inputMenuActions from "./actions/index.js"
import menuIcons from "./icons/js/index.js"
import core from "Core"
import "./index.css"


function inputMenuSchema(options, onConfirm = ()=>{}, onClose = ()=>{}, onCreation = () => {}){
    let menu = Object.create({
        parentElement: 'div',
        classes: 'menu root',
        id: 'menuReady',
        children: {

            menuAddMenuCloseIcon: {
                element: 'img',
                classes: 'menu-close',
                src: menuIcons.close,

                event: {
                    type: 'click',
                    fn() {
                        try{
                            onClose()
                        }catch(e){
                            console.log(e)
                            handleError(e.message)
                        }
                        inputMenuActions.closeMenu(this)
                    }
                }
            },

            menuAddOptions: {
                parentElement: 'div',
                classes: 'menu__options',

                children: {
                    ...options

                }
            },

            confirmButtonWrapper: {
                parentElement: 'div',

                children: {
                    confirmButton: {
                        parentElement: 'button',
                        classes: 'menu__confirm-btn',

                        event:{
                            type: 'click',
                            fn(){
                                try{
                                    onConfirm(inputMenuActions.getInputs(core.utils.dom.getRootParent(this)))
                                    inputMenuActions.closeMenu(this)

                                }catch(e){
                                    console.log(e)
                                    handleError(e.message, core.utils.dom.getRootParent(this));
                                }
                            }
                        },

                        children: {
                            confirmContainer: {
                                parentElement: 'div',
                                classes: 'menu__confirm-container flex-wrapper',

                                children: {
                                    confirmText: {
                                        element: 'p',
                                        classes: 'menu__confirm-txt',
                                        textContent: 'CONFIRM'
                                    },

                                    confirmIcon: {
                                        element: 'img',
                                        src: menuIcons.confirm
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    let interval = setInterval(() => {
        if(document.querySelector('#menuReady')){
            onCreation(document.querySelector('#menuReady'))
            clearInterval(interval)
            return;
        }
    },100)

    return menu
}



export default inputMenuSchema;