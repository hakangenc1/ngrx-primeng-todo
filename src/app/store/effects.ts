import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of, concatMap, exhaustMap } from 'rxjs';
import { TodosService } from '../services/todos.service';
import * as TodosAction from './actions';

@Injectable()
export class TodosEffects {
  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosAction.getTodos),
      concatMap(() => {
        return this.todosService.getTodos().pipe(
          map((todos) => TodosAction.getTodosSuccess({ todos })),
          catchError((error) =>
            of(TodosAction.getTodosFailure({ error: error.message }))
          )
        );
      })
    )
  );

  toggleStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosAction.toggleTodoStatus),
      concatMap(({ todo }) => {
        return this.todosService.toggleStatus(todo).pipe(
          map((todo) => TodosAction.toggleTodoStatusSuccess({ todo })),
          catchError((error) =>
            of(TodosAction.getTodosFailure({ error: error.message }))
          )
        );
      })
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosAction.addTodo),
      exhaustMap(({ todo }) => {
        return this.todosService.addTodo(todo).pipe(
          map((todo) => TodosAction.addTodoSuccess({ todo })),
          catchError((error) =>
            of(TodosAction.addTodoFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
