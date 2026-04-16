function applySearch(query) {
    const tasks = document.querySelectorAll('.task.root');
    tasks.forEach(taskEl => {
        let show = true;
        
        if (query) {
            const taskTitle = taskEl.querySelector('.task__title')?.textContent || '';
            show = taskTitle.toLowerCase().includes(query.toLowerCase());
        }
        
        taskEl.style.display = show ? '' : 'none';
    });
}

function clearSearch() {
    const tasks = document.querySelectorAll('.task.root');
    tasks.forEach(taskEl => {
        taskEl.style.display = '';
    });
}

export { applySearch, clearSearch };