import { useState } from 'react'
import './App.css'
import { TodoList } from './components/TodoList'
import { TodoListForm } from './components/TodoListForm'

function App() {
  const [ list, setList ] = useState([]);

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
      <TodoListForm list={list} setList={setList} />
      <TodoList list={list} setList={setList}/>
    </div>
  )
}

export default App
