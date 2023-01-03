import { createAction, props } from '@ngrx/store';
import { TodoInterface } from '../types/todoState.interface';

export const getTodos = createAction('[Todos] Get Todos');

export const getTodosSuccess = createAction(
  '[Todos] Get Todos success',
  props<{ todos: TodoInterface[] }>()
);

export const getTodosFailure = createAction(
  '[Todos] Get Todos failure',
  props<{ error: string }>()
);

export const toggleTodoStatus = createAction(
  '[Todos] Update Todos',
  props<{ todo: TodoInterface }>()
);

export const toggleTodoStatusSuccess = createAction(
  '[Todos] Update Todos success',
  props<{ todo: TodoInterface }>()
);

export const toggleTodoStatusFailure = createAction(
  '[Todos] Update Todos failure',
  props<{ error: string }>()
);

export const addTodo = createAction(
  '[Todos] Add Todo',
  props<{ todo: TodoInterface }>()
);

export const addTodoSuccess = createAction(
  '[Todos] Add Todo success',
  props<{ todo: TodoInterface }>()
);

export const addTodoFailure = createAction(
  '[Todos] Add Todo failure',
  props<{ error: string }>()
);
