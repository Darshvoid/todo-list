import "./index.css"

let blurBackground = {
    on(){
        let blackBackground = document.createElement('div');
        blackBackground.classList.add('black');
        document.body.firstChild.before(blackBackground);

        document.querySelector('.app-container').classList.add('background-blur');
    },

    off(){
        document.querySelector('.app-container').classList.remove('background-blur');
        document.querySelector('.black').remove();
    }
}

export default blurBackground;