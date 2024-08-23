import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todos[] = []
  title: string = ""
  desc: string = ""
  currentId: number = -1
  userEmail: string = JSON.parse(localStorage.getItem('emailId'))

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getTodos(this.userEmail).subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo(todo) {
    if (this.currentId >= 0) {
      const index = this.currentId;
      const existingTodo = this.todos[index];

      const updateThetodo = {
        ...existingTodo,
        title: todo.title,
        desc: todo.desc
      };
      this.todoService.updateTodo(this.todos[index]._id, updateThetodo).subscribe((updatedTodo) => {
        this.todos[index] = updatedTodo;
      });
      this.currentId = -1
    } else {
      this.todoService.addTodo(todo).subscribe((newTodo) => {
        this.todos.push(newTodo);
      });
    }

    this.title = ""
    this.desc = ""
  }

  editTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.title = this.todos[index].title
    this.desc = this.todos[index].desc
    this.currentId = index
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo._id).subscribe(() => {
      this.todos = this.todos.filter(t => t !== todo);
    });
  }

  checkTodo(todo) {
    todo.active = !todo.active;
  }
}