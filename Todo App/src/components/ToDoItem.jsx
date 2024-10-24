import React from "react";

const ToDoItem = ({ task, index, removeToDo }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 rounded-lg p-3 mb-2">
      <span className="text-gray-800">{task}</span>
      <button
        onClick={() => removeToDo(index)}
        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 focus:outline-none"
      >
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
