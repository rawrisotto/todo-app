import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const NewTodo = ({ createNewTodo }) => {
  const [data, setData] = useState({ todo: "" });

  const handleSubmit = (event) => {
    event.preventDefault()
    createNewTodo({
      id: uuidv4(),
      name: data.todo,
      completed: false
    })
    setData({ todo: "" })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className="new-todo" onSubmit={handleSubmit}>
      <label htmlFor="todo" className="sr-only">
        Create a new todo
      </label>
      <button className="checkbox" type="submit"></button>
      <input
        type="text"
        id="todo"
        name="todo"
        placeholder="Create a new todo..."
        value={data.todo}
        onChange={handleChange}
      />
    </form>
  );
};

export default NewTodo;
