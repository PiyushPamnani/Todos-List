declare var gapi: any
import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';
  user: {
    email: string
    picture: string
    name: string
  } | undefined;
  localItem: string
  clientId = environment.clientId

  constructor(private todoService: TodoService) {
  }


  ngOnInit(): void {
    this.localItem = localStorage.getItem('loggedinUser')
    if (this.localItem == null) {
      this.user = undefined
    } else {
      this.user = JSON.parse(this.localItem)
      localStorage.setItem('emailId', JSON.stringify(this.user.email))
      this.todoService.signIn(this.user).subscribe();
    }
  }

  signOut() {
    localStorage.removeItem('loggedinUser')
    localStorage.removeItem('emailId')
    this.user = undefined
    window.location.reload()
  }
}
