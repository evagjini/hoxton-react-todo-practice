export function AddTodo({ createTodo }) {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                createTodo(event.target.text.value);
                event.target.reset();
            }}
        >
            <input
                type="text"
                placeholder="add a todo..."
                name="text"
                required
                minLength={3}
            />
            <button className="add-button"> ADD TODO</button>
        </form>
    );
}
