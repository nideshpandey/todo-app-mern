import React from 'react'

function Todo({todo}) {
  return (
    <div className="todo-details">
        <h4>{todo.title}</h4>
        <h3>{todo.description}</h3>
        <p>{todo.createdAt}</p>
        <br />

    </div>
  )
}

export default Todo