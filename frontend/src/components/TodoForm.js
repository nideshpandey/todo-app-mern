import React, { useState } from "react";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todos = { title, description };

    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json ",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setError(null);
      console.log("Todo Added", json);
    }
    
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a Todo</h3>
      <label>Enter Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Enter description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <br />
      <button>Add Todo</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default TodoForm;
