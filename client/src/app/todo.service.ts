import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todos } from './Todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'https://todos-backend-kappa.vercel.app';

  constructor(private http: HttpClient) { }

  signIn(user) {
    return this.http.post(`${this.baseUrl}/users/signin`, {
      user
    });
  }

  getTodos(creator: string): Observable<Todos[]> {
    const params = new HttpParams().set('creator', creator);
    return this.http.get<Todos[]>(`${this.baseUrl}/lists`, { params });
  }

  addTodo(todo: Todos): Observable<Todos> {
    return this.http.post<Todos>(`${this.baseUrl}/lists`, todo);
  }

  updateTodo(id: string, todo: Todos): Observable<Todos> {
    return this.http.patch<Todos>(`${this.baseUrl}/lists/${id}`, todo);
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/lists/${id}`);
  }
}
