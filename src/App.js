import { useState } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className="todo-app">
      <h1>Мой Ту-Ду Лист</h1>
      <TodoForm/>
      <hr className="separator" />
    </div>
  );
}

export default App;
