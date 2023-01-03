import { createReducer, on } from '@ngrx/store';
import { TodosStateInterface } from '../types/todoState.interface';
import * as TodosAction from './actions';

export const initialState: TodosStateInterface = {
  isLoading: false,
  todos: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(TodosAction.getTodos, (state) => ({ ...state, isLoading: true })),

  on(TodosAction.getTodosSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    todos: action.todos,
  })),

  on(TodosAction.getTodosFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),

  on(TodosAction.toggleTodoStatus, (state) => ({ ...state, isLoading: true })),

  on(TodosAction.toggleTodoStatusSuccess, (state, action) => {
    const updatedTodo = state.todos.map((todo) => {
      return action.todo.id === todo.id ? action.todo : todo;
    });
    return {
      ...state,
      todos: updatedTodo,
      isLoading: false,
    };
  }),

  on(TodosAction.toggleTodoStatusFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),

  on(TodosAction.addTodoSuccess, (state, action) => ({
    ...state,
    todos: [action.todo, ...state.todos],
  })),

  on(TodosAction.addTodoFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
