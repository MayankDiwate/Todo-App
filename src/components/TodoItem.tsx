import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

type TodoItem = {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDeletTodo: (id: number) => void;
};

const TodoItem = ({ todo, onCompletedChange, onDeletTodo }: TodoItem) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <label className="flex w-full items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-gray-100">
        <input
          type="checkbox"
          className="scale-125"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDeletTodo(todo.id)}>
        <Trash2 />
      </button>
    </div>
  );
};

export default TodoItem;
