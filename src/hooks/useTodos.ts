import { useEffect, useState } from "react";
import { dummyData } from "../data/todos";
import { Todo } from "../types/todo";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    return storedTodos?.length > 0 ? storedTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const handleSubmit = (title: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const deleteCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return {
    todos,
    setTodoCompleted,
    handleSubmit,
    deleteTodo,
    deleteCompletedTodos,
  };
};

export default useTodos;
