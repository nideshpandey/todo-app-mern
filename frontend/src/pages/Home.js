import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

function Home() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const json = await response.json();

      if (response.ok) {
        setTodos(json);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="home">
      <div className="todos">
        {
            todos &&
            todos.map((todo) => (
                <Todo key={todo._id} todo={todo} />
            ))
        }
      </div>
      <TodoForm />
    </div>
  );
}

export default Home;
