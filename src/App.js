import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addTodo, toggleTodo } from "./redux/actions";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const { loading, todos, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={handleToggleTodo}
      />
      <TodoForm addTodo={handleAddTodo} />
    </div>
  );
}

export default App;
