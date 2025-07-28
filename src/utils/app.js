const allTasks = []; //adding tasks to allTasks would be done externally (not in class)

class Task {
    constructor(name,description,dueDate,projectId){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.projectId = projectId;
        this.isImportant = false;
        this.isCompleted = false;
        this.id = 't' + Date.now(); //generate id using the time it was created
    }

    setName(name){
        this.name = name;
    }
    setDescription(description){
        this.description = description;
    }
    setDueDate(dueDate){
        this.dueDate = dueDate;
    }
    setProject(projectId){
        this.projectId = projectId;
    }
    setIsImportant(isImportant){
        this.isImportant = isImportant;
    }
    setIsCompleted(isCompleted){
        this.isCompleted = isCompleted;
    }
}

class Project {
    constructor(name){
        this.name = name;
        this.tasks = [];
        this.id = 'p' + Date.now();
    }

    setName(name){
        this.name = name;
    }

    addTask(task){
        this.tasks.push(task);
        task.setProject(this.id);
    }
}