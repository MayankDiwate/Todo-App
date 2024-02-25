import { Todo } from "../types/todo";

type TodoSummaryProps = {
  todos: Todo[];
  deleteCompletedTodos: () => void;
};

const TodoSummary = ({ todos, deleteCompletedTodos }: TodoSummaryProps) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} todos Completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteCompletedTodos}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Delete all completed Todos
        </button>
      )}
    </div>
  );
};

export default TodoSummary;
