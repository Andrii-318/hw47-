import React from "react";

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          onClick={() => toggleTodo(index)}
          className={todo.completed ? "completed" : ""}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
