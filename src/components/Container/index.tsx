import { TodoContextType } from "../../@types/todo";
import { useTodo } from "../../contexts/TodoContext";
import TodoItem from "../TodoItem";
import "./container.css";

export default function Container() {
  const { todos } = useTodo() as TodoContextType;

  return (
    <ul className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <li key={index}>
            <TodoItem todo={todo} />
          </li>
        ))}
    </ul>
  );
}
