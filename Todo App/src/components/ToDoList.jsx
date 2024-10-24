import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoItems, removeToDo }) => {
  return (
    <ul className="list-none p-0">
      {toDoItems.map((item, index) => (
        <ToDoItem
          key={index}
          task={item}
          index={index}
          removeToDo={removeToDo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
