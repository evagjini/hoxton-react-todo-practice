export function SingleTodo({ todo, toggleCompleted, deleteTodo }) {
    return (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span
                onClick={() => {
                    toggleCompleted(todo.id);
                }}
            >
                {todo.text}
            </span>

            <button
                onClick={() => {
                    deleteTodo(todo.id);
                }}
            >
                {" "}
                X{" "}
            </button>
        </li>
    );
}
