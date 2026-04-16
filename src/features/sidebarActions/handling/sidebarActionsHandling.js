import projects from "Projects";
import tasks from "Tasks";
import * as Datefns from "date-fns";

function unloadAllTasks() {
    document.querySelectorAll('.task').forEach(el => el.remove());
}

function loadFilteredTasks(filterFn) {
    unloadAllTasks();
    const allProjects = projects.ProjectHandling.getProjectsArray();
    allProjects.forEach(proj => {
        proj.tasks.forEach(task => {
            if (filterFn(task)) {
                tasks.createTask(task);
            }
        });
    });
}

function showAllTasks() {
    loadFilteredTasks(() => true);
}

function showDueToday() {
    const today = new Date();
    loadFilteredTasks(task => Datefns.isSameDay(new Date(task.dueDate), today));
}

function showNext7Days() {
    const today = new Date();
    const end = Datefns.addDays(today, 7);
    loadFilteredTasks(task => Datefns.isWithinInterval(new Date(task.dueDate), { start: today, end }));
}

export { showAllTasks, showDueToday, showNext7Days };