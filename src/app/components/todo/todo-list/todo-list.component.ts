import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  errorSelector,
  isLoadingSelector,
  todosSelector,
} from 'src/app/store/selectors';
import {
  AppStateInterface,
  TodoInterface,
} from 'src/app/types/todoState.interface';

import * as TodosAction from '../../../store/actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  todos$: Observable<TodoInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.todos$ = this.store.pipe(select(todosSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(TodosAction.getTodos());
  }

  toggleStatus(todo: TodoInterface): void {
    this.store.dispatch(TodosAction.toggleTodoStatus({ todo }));
  }

  addNewTodo(text: string) {
    const newTodo = {
      text,
      completed: false,
    };
    // Dispatch an action to add the todo to the Todo state
    console.log(newTodo);
  }
}
