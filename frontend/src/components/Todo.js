import React from "react";

function Todo({ todo }) {
  const handleClick = async () => {
    const response = await fetch("/api/todos/" + todo._id, {
        method: 'DELETE'
    });

    const json = await response.json();

    if (response.ok) {
      console.log("Todo Deleted");
      console.log(json);
    }
  };
  return (
    <div className="todo-details">
      <h4>{todo.title}</h4>
      <h3>{todo.description}</h3>
      <p>{todo.createdAt}</p>
      <button onClick={handleClick}>Delete</button>
      <br />
    </div>
  );
}

export default Todo;
