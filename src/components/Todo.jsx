import React, { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: todos.length,
      value
    };

    setTodos([...todos, newTodo]);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={addTodo}>add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
