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
      <h3>{todo.title}</h3>
      <h5>{todo.description}</h5>
      <p>{todo.createdAt}</p>
      <button onClick={handleClick}>Delete</button>
      <br />
    </div>
  );
}

export default Todo;
