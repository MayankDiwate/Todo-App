import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDeletTodo: (id: number) => void;
};

const TodoList = ({ todos, onCompletedChange, onDeletTodo }: TodoListProps) => {
  const sortedTodos = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <div>
      {sortedTodos.length == 0 ? (
        <h2 className="text-md text-gray-500 text-center">No Todos yet!</h2>
      ) : (
        <div className="space-y-2">
          {sortedTodos.map((todo) => (
            <p key={todo.id} className="text-lg">
              <TodoItem
                todo={todo}
                onCompletedChange={onCompletedChange}
                onDeletTodo={onDeletTodo}
              />
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
