import { useState } from 'react'
import './App.css'
import { TodoList } from './components/TodoList'
import { TodoListForm } from './components/TodoListForm'

function App() {
  const [ list, setList ] = useState([]);

  function createItem(productName, quantity, checked = false) {
    if(!(productName.current.value).trim()) return;
    if(list.length === 5) return alert('Número máximo de itens atingido');

    setList((prevList) => [
      ...prevList,
      {
        productName: productName.current.value,
        quantity: quantity.current.value,
        checked: checked
      }
    ]);
  }

  function removeItem (index) {
    setList(list.filter((_, position) => position !== index));
  }

  function checkHandler (index) {
    const newList = list.map((record, position) => {
      if(position === index) {
        record.checked = !record.checked
      }
      return record;
    });

    setList(newList);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
      <TodoListForm createItem={createItem} />
      <TodoList items={list} removeItem={removeItem} checkHandler={checkHandler}/>
    </div>
  )
}

export default App
