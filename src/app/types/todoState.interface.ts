export interface TodoInterface {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodosStateInterface {
  isLoading: boolean;
  todos: TodoInterface[];
  error: string | null;
}

export interface AppStateInterface {
  todos: TodosStateInterface;
}
