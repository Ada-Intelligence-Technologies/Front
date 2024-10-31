import { Observable } from "rxjs";
import { createTaskDto, id, Task } from "./models";



const tasks: Task[] = [
  { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
  { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
  { id: 3, title: 'Task 3', description: 'Description 3', completed: false },
  { id: 4, title: 'Task 4', description: 'Description 4', completed: true },
  { id: 5, title: 'Task 5', description: 'Description 5', completed: false },
];


const get = () => {
  return new Observable<Task[]>((observer) => {
    observer.next(tasks);
  });
}

const post = (task: createTaskDto) => {
  return new Observable<id>((observer) => {
    tasks.push({
      ...task,
      id: tasks.length + 1,
      completed: false
    });
    observer.next(tasks.length + 1);
  });
}

const toggleTaskStatus = (task: id) => {
  return new Observable((observer) => {
    const taskIndex = tasks.findIndex(t => t.id === task);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    observer.complete();
  });
}

const todoApi = {
  get: get,
  post: post,
  toggleTaskStatus
}

export default todoApi;
