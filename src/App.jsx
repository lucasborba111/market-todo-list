import './App.css'
import { TodoList } from './components/TodoList'
import { TodoListForm } from './components/TodoListForm'

function App() {
  return (
    <>
      <TodoList items={{producName: 'Maça', quantity: 3}}/>
      <TodoListForm/>
    </>
  )
}

export default App
