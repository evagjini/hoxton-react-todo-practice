type Props = {
    toggleCompleted: void
}



export function SingleTodo({ todo, toggleCompleted }) {
    return (
        <li key={todo.id} className={todo.completed ? 'completed' : ''} onClick={() => {
            toggleCompleted(todo.id)
        }}>
            {todo.text}
        </li>
    )
}