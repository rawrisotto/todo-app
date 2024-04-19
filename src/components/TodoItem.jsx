import cross from "/assets/icon-cross.svg";

const TodoItem = (props) => {
  const toggleCompletion = (event, id) => {
    event.stopPropagation();
    props.handleCompleteTodo(id);
  };

  const deleteItem = (event, id) => {
    event.stopPropagation();
    props.handleDeleteTodo(id);
  };

  return (
    <div
      className="todo-item"
      onClick={(event) => toggleCompletion(event, props.todo.id)}
    >
      <button
        className={"checkbox " + (props.todo.completed ? "checked" : null)}
        onClick={(event) => toggleCompletion(event, props.todo.id)}
      ></button>
      <p>{props.todo.name}</p>
      <button
        className="btn"
        onClick={(event) => deleteItem(event, props.todo.id)}
      >
        <img src={cross} alt="Delete item icon" />
      </button>
    </div>
  );
};

export default TodoItem;
