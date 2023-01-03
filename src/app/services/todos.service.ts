import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { TodoInterface } from '../types/todoState.interface';

@Injectable()
export class TodosService {
  baseURL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(`${this.baseURL}/todos`);
  }

  toggleStatus(todo: TodoInterface) {
    const { id, completed, text } = todo;
    return this.http.put<TodoInterface>(`${this.baseURL}/todos/${id}`, {
      text: text,
      completed: !completed,
    });
  }

  addTodo(todo: TodoInterface) {
    return this.http.post<TodoInterface>(`${this.baseURL}/todos`, todo);
  }
}
