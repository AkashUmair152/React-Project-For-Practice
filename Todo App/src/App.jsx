import { useState, useEffect } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [toDoItems, setToDoItems] = useState([]);

  // Load To-Do items from localStorage
  useEffect(() => {
    const savedToDos = JSON.parse(localStorage.getItem("toDoItems")) || [];
    setToDoItems(savedToDos);
  }, []);

  // Save To-Do items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
  }, [toDoItems]);

  // Add a new To-Do
  const addToDo = (task) => {
    setToDoItems([...toDoItems, task]);
  };

  // Remove a To-Do
  const removeToDo = (index) => {
    const newToDos = toDoItems.filter((_, i) => i !== index);
    setToDoItems(newToDos);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
        To-Do List
      </h1>
      <ToDoInput addToDo={addToDo} />
      <ToDoList toDoItems={toDoItems} removeToDo={removeToDo} />
    </div>
  );
};

export default App;
