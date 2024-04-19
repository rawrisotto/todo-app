import { useState } from "react";
import Heading from "./components/Heading";
import TodoItem from "./components/TodoItem";
import { data } from "./data";

function App() {
  const [todos, setTodos] = useState(data);
  const [darkMode, setDarkMode] = useState(true);
  const [type, setType] = useState("");

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const handleCompleteTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const displayedTodos = type
    ? type === "active"
      ? todos.filter((todo) => todo.completed === false)
      : todos.filter((todo) => todo.completed === true)
    : todos;

  const todosElements = displayedTodos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    );
  });

  return (
    <main>
      <Heading darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <section className="todo-list">
        {todosElements}
        <div className="todo-footer">
          <p>{todos ? todos.length : "0"} items left</p>
          <div className="center-wrapper">
            <button className={"btn " + (type === "" ? "current" : null)} onClick={() => setType("")}>
              All
            </button>
            <button className={"btn " + (type === "active" ? "current" : null)} onClick={() => setType("active")}>
              Active
            </button>
            <button className={"btn " + (type === "completed" ? "current" : null)} onClick={() => setType("completed")}>
              Completed
            </button>
          </div>
          <button className="btn">Clear Completed</button>
        </div>
      </section>
    </main>
  );
}

export default App;
