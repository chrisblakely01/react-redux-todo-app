import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  // state holds the entire app data, so that's why
  // we must specify which one we're working with, e.g., state.todos
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
