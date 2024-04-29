import React, { useState } from "react";

const Context = () => {
  const [todos, setTodos] = useState([]);
  const [input, setinput] = useState("");

  function addtodo() {
    setTodos([...todos, input]);
    setinput("");
  }
  function deletetodo(index) {
    const update = [...todos];
    update.splice(index, 1);
    setTodos(update);
  }
  function updatetodo(index, newvalue) {
    const update = [...todos];
    update[index] = newvalue;
    setTodos(update);
  }

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button onClick={addtodo}>add</button>
        <ul>
          {todos.map((todo, index) => {
            console.log(todo);
            return (
              <li key={index}>
                {todo}
                <button onClick={() => deletetodo(index)}>delete</button>
                <button
                  onClick={() => updatetodo(index, prompt("enter new value"))}
                >
                  update
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Context;
