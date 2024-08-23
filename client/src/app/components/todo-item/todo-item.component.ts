import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: Todos
  @Input() i: number
  @Output() todoEdit: EventEmitter<Todos> = new EventEmitter();
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todos> = new EventEmitter();

  onEdit(todo) {
    this.todoEdit.emit(todo)
  }

  onDelete(todo) {
    this.todoDelete.emit(todo)
  }

  onCheckBox(todo) {
    this.todoCheckBox.emit(todo)
  }


}
