import {Component} from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../../services/todo-data.service';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css'],
  providers: [TodoDataService]
})

export class AddTodoItemComponent {
  newTodo: Todo = new Todo();
  searchText = '';

  constructor(private todoDataService: TodoDataService) {}

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  get complete() {
    return this.todoDataService.getCompleteTodos();
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }
}
