import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;
  private readonly localStorageKey = 'tasks';

  constructor() {
    this.loadTasks();
  }

  private loadTasks() {
    const storedTasks = localStorage.getItem(this.localStorageKey);
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      this.nextId = Math.max(...this.tasks.map((t) => t.id), 0) + 1; // Encuentra el ID más alto + 1
    }
  }

  private saveTasks() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    const newTask: Task = {
      id: this.nextId++,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  toggleCompleted(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
    }
  }
}
