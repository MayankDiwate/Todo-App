import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    deleteTodo,
    deleteCompletedTodos,
    handleSubmit,
    setTodoCompleted,
  } = useTodos();

  return (
    <main className="py-10 h-screen space-y-6 overflow-y-auto">
      <h1 className="font-bold text-5xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodo onSubmit={handleSubmit} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDeletTodo={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteCompletedTodos={deleteCompletedTodos} />
    </main>
  );
}

export default App;
