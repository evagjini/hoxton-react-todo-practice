import { useEffect, useState } from "react";
import { SingleTodo } from "./SingleTodo";

type Props = {
    search: string;
};

export function TodoList({
    search,
    todos,
    setTodos,
    toggleCompleted,
    deleteTodo,
}: Props) {
    const filteredTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        fetch("http://localhost:3005/todos")
            .then((resp) => resp.json())
            .then((todosFromServer) => setTodos(todosFromServer));
    }, []);
    return (
        <ul>
            {filteredTodos.map((todo) => (
                <SingleTodo
                    key={todo.id}
                    todo={todo}
                    toggleCompleted={toggleCompleted}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}
