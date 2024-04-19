import { useState } from "react";
import Heading from "./components/Heading";
import TodoItem from "./components/TodoItem";
import { data } from "./data";

function App() {
  const [todos, setTodos] = useState(data);
  const [darkMode, setDarkMode] = useState(true);

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

  const todosElements = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleCompleteTodo={handleCompleteTodo}
      />
    );
  });

  return (
    <main>
      <Heading darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {todosElements}
    </main>
  );
}

export default App;
