import core from "Core";

function closeMenu(menu){
    core.utils.dom.removeRootParent(menu)
    core.ui.blurBackground.off()
}

export default closeMenu;