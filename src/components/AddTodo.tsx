import { useState } from "react";

type AddTodoProps = {
  onSubmit: (title: string) => void;
};

const AddTodo = ({ onSubmit }: AddTodoProps) => {
    const [input, setInput] = useState<string>("");
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
      if (!input) return;
      onSubmit(input);
      setInput("");
    };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What need's to be done"
        className="rounded-s-md grow border border-gray-400 p-2"
      />

      <button
        type="submit"
        className="w-16 rounded-e-md bg-gray-900 text-white hover:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
