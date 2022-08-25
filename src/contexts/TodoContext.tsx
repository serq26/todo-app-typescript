import React, { createContext, useContext, useEffect, useState } from "react";
import { ITodo, TodoContextType } from "../@types/todo";

interface PropTypes {
  children: React.ReactNode;
}

const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider = (props: PropTypes) => {
  const [todos, setTodos] = useState<ITodo[]>(JSON.parse(localStorage.getItem("todos")!) || []);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id: string) => {
    todos.map((todo: ITodo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
        setTodos([...todos]);
      }
      return true;
    });
  };

  const deleteTodo = (id: string) => {
    let res = todos.filter((todo: ITodo) => todo.id !== id);
    setTodos(res);
  };

  const values = { todos, setTodos, updateTodo, addTodo, deleteTodo };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);

export { TodoProvider, useTodo };
