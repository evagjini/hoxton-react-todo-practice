import { useState } from "react";
import { SingleTodo } from "./SingleTodo";


type Todo = {
    id: number;
    text: string;
    completed: boolean

}

type Props = {
    search: string

}

export function TodoList({ search }: Props) {
    const [todos, setTodos] = useState([

        { id: 1, text: 'Practise React', completed: true },
        { id: 2, text: 'Read a Book', completed: false },
        { id: 3, text: 'Eat your vegies', completed: false },
        { id: 4, text: 'Share the Love', completed: false },
        { id: 5, text: 'Be good at react', completed: false }
    ])
    function toggleCompleted(id: number) {

        // we make  a copy
        let todosCopy = structuredClone(todos)
        /// change the state we need to find
        const match = todosCopy.find(todo => todo.id === id)
        match.completed = !match.completed
        // update todos 
        setTodos(todosCopy)
    }

    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
    return (
        <ul>
            {filteredTodos.map(todo => (
                < SingleTodo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
            ))}
        </ul>

    )
}