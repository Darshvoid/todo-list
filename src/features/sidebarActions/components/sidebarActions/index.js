import { showAllTasks, showDueToday, showNext7Days } from "../../handling/sidebarActionsHandling.js";

function SidebarActions() {
    const actions = document.querySelectorAll('.home__action');
    actions.forEach(action => {
        const textElement = action.querySelector('.home__action-text');
        if (!textElement) return;
        const text = textElement.textContent.trim();
        action.addEventListener('click', () => {
            if (text === 'All tasks') {
                showAllTasks();
            } else if (text === 'Due Today') {
                showDueToday();
            } else if (text === 'Next 7 Days') {
                showNext7Days();
            }
        });
    });
}

export default SidebarActions;