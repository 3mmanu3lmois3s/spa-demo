import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component'; // Importa
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // ¡Importante!
  imports: [TodoListComponent, CommonModule], // Importa aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spa-demo';
}
