import React from "react";

const Todo = ({ todos, setTodos, currentItem }) => {
  function deleteHandler() {
    setTodos(todos.filter((el) => el.id !== currentItem.id));
  }

  function completeHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === currentItem.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  return (
    <div className="todo">
      <li className={`${currentItem.completed && "completed"}   todo-item`}>
        {currentItem.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
