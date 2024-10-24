import React, { useState } from "react";

const ToDoInput = ({ addToDo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addToDo(task); // Add task to the list
    setTask(""); // Clear input field
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        className="w-full px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
      >
        Add
      </button>
    </form>
  );
};

export default ToDoInput;
