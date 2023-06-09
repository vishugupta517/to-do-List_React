import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  function inputTextHandler(e) {
    setInputText(e.target.value);
  }

  function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  }

  function statusHandler(e) {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncomplete">Uncomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
