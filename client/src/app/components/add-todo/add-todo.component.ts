import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {
  isFilled: boolean = true
  @Input() title: string
  @Input() desc: string
  @Input() id: number
  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.title || !this.desc) {
      this.isFilled = false
    } else {
      const todo = {
        creator: JSON.parse(localStorage.getItem('emailId')),
        title: this.title,
        desc: this.desc,
        active: true,
      }

      this.isFilled = true
      this.todoAdd.emit(todo);
      this.title = ""
      this.desc = ""
    }
  }
}