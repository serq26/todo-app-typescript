import { ITodo, TodoContextType } from "../../@types/todo";
import { useTodo } from "../../contexts/TodoContext";
import "./todoitem.css";

interface PropTypes {
  todo: ITodo;
}

export default function TodoItem(props: PropTypes) {
  const { todo } = props;
  const { updateTodo, deleteTodo } = useTodo() as TodoContextType;

  const handleChange = (id: string) => {
    updateTodo(id);
  };
  
  return (
    <div className={`item ${todo.isDone ? "done" : ""}`}>
      <p>{todo.text}</p>
      <div style={{display:"flex"}}>
        <label>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={() => handleChange(todo.id)}
          />
        </label>
        <button className="remove" onClick={() => deleteTodo(todo.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
