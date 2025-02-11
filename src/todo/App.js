import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, removeTodo } from "./redux/todoSlice";

const App = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo Uygulaması</h1>
      <input
        type="text"
        placeholder="Yeni görev ekleyin..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Ekle</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
            <button onClick={() => dispatch(toggleComplete(todo.id))}>
              {todo.completed ? "Geri Al" : "Tamamla"}
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
