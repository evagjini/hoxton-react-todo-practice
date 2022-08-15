import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Search } from "./components/Search";
import { TodoList } from "./components/TodoList";
import { TodoTitle } from "./components/TodoTitle";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function toggleCompleted(id: number) {
    // we make  a copy
    let todosCopy = structuredClone(todos);
    /// change the state we need to find
    const match = todosCopy.find((todo) => todo.id === id);
    match.completed = !match.completed;

    fetch(`http://localhost:3005/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(match),
    });
    method: "PATCH";

    // update todos
    setTodos(todosCopy);
  }

  function deleteTodo(id: number) {
    const todosCopy = todos.filter((todo) => todo.id !== id);

    fetch(`http://localhost:3005/todos/${id}`, {
      method: "DELETE",
    });

    setTodos(todosCopy);
  }

  function createTodo(text: string) {
    let newTodo = {
      text: text,
      completed: false,
    };
    fetch("http://localhost:3005/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((resp) => resp.json())
      .then((todoFromserver) => {
        setTodos([...todos, todoFromserver]);
      });
  }

  return (
    <div className="App">
      <TodoTitle />
      <Search setSearch={setSearch} />
      <AddTodo createTodo={createTodo} />
      <TodoList
        search={search}
        todos={todos}
        setTodos={setTodos}
        toggleCimpleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
