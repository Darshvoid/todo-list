import tasks from "Tasks"

class ProjectHandling{
  static currentProject = null;
  static allProjects = [];



  static getProjectsArray(){
    return this.allProjects;
  }



  static getCurrentProject(){
      return this.currentProject;
    }

  static pushToProjectsArray(project){
    this.allProjects.push(project)
  }

  static setCurrentProject(project){
    this.allProjects.push(project)
    this.currentProject = project;

  }

  static loadProject(project){
    this.currentProject = project;
    project.tasks.forEach(element => {
        tasks.createTask(element)
    });
  }

  static unloadProject(){
    document.querySelectorAll('.task').forEach((el)=>{
      el.remove()
    })
  }

  static removeTask(taskId){
    this.currentProject.tasks = this.currentProject.tasks.filter(task => task._id !== taskId);
  }

  static removeProject(projectId){
    if(this.projectId === 'default') return;
    this.allProjects = this.allProjects.filter(project => project._id !== projectId);
  }

}

export default ProjectHandling;