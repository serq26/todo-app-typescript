import { useState } from "react";
import { ITodo, TodoContextType } from "../../@types/todo";
import { useTodo } from "../../contexts/TodoContext";
import { v4 as uuid } from 'uuid';
import "./addtodo.css";

export default function AddTodo() {
  const initialData:ITodo = {
    id:  uuid(),
    text: "",
    isDone: false,
    createdDate: "",
  };
  const { addTodo } = useTodo() as TodoContextType;
  const [formData, setFormData] = useState<ITodo>(initialData);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    let currentTime = new Date();
    setFormData({ ...formData, createdDate: currentTime.toISOString() });
    addTodo(formData);
    setFormData(initialData);
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        placeholder="Add Todo"
        name="text"
        value={formData.text}
        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
}
