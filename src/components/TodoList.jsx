import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todoItem) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todoItem.id}
            currentItem={todoItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
