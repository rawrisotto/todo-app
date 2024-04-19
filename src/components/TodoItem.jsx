import cross from "/assets/icon-cross.svg"

const TodoItem = (props) => {

  const toggleCompletion = (event, id) => {
    event.stopPropagation()
    console.log("TEST")
    props.handleCompleteTodo(id)
  }

  return(
    <div className="todo-item" onClick={event => toggleCompletion(event, props.todo.id)}>
      <button className={"checkbox " + (props.todo.completed ? "checked" : null)} onClick={event => toggleCompletion(event, props.todo.id)}></button>
      <p>{props.todo.name}</p>
      <button className="btn" onClick={() => console.log("Cross Clicked")}>
        <img src={cross} alt="Delete item icon" />
      </button>
    </div>
  )
}

export default TodoItem