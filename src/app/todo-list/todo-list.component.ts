import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true, // Standalone
  imports: [FormsModule, CommonModule], // Importa FormsModule y CommonModule
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
      this.tasks = this.taskService.getTasks(); // Actualiza la lista
    }
  }

  deleteTask(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      this.taskService.deleteTask(id);
      this.tasks = this.taskService.getTasks();
    }
  }

  toggleCompleted(id: number): void {
    this.taskService.toggleCompleted(id);
    this.tasks = this.taskService.getTasks();
  }
}
