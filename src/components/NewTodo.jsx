import { useState } from "react"

const NewTodo = () => {
  const [data, setData] = useState({})

  return (
    <div className="new-todo">
      <label htmlFor="new-todo" className="sr-only">Create a new todo</label>
      <button className="checkbox"></button>
      <input type="text" id="new-todo" name="new-todo" placeholder="Create a new todo..." value={data.hidden} />
    </div>
  )
}

export default NewTodo