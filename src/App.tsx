
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([

    { id: 1, text: 'Practise React', completed: true },
    { id: 2, text: 'Read a Book', completed: false },
    { id: 3, text: 'Eat your vegies', completed: false },
    { id: 4, text: 'Share the Love', completed: false },
    { id: 5, text: 'Be good at react', completed: false }
  ])


  return (
    <div className="App">

      <h1>Eva's Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.text}
          </li>
        ))}
      </ul>

    </div >
  )
}

export default App
