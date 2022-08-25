export interface ITodo {
  id: string;
  text: string;
  isDone: boolean;
  createdDate: string;
}

export type TodoContextType = {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  updateTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};
