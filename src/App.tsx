

import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import { TodoList } from './components/TodoList'
import { TodoTitle } from './components/TodoTitle'

function App() {

  const [search, setSearch] = useState('')


  return (
    <div className="App">

      < TodoTitle />
      < Search setSearch={setSearch} />
      < TodoList search={search} />

    </div >
  )
}

export default App
