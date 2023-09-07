import { useState } from 'react';
import ToDoItem from './components/ToDoItem'
import './App.css'
import TodoInput from './components/TodoInput';

function App() {
  var [todoItems, setToDoItems]=useState(['Buy Eggs' ,'Hit the Gym','Take a shower']);
  var[completedItems,setCompleteditems]=useState([]);

  function deleteToDo(todoItem){
    setToDoItems(todoItems.filter(e=>e!=todoItem));
  }

  function addTodo(todoItem){
    setToDoItems([...todoItems,todoItem]);
  }
  function completeTodo(todoItem){
    setToDoItems(todoItems.filter(e=>e!=todoItem));
    setCompleteditems([...completedItems,todoItem]);
  }

  return (
    <div className="App">
      <h1 className="title">To Do List</h1>
      <div>
          <TodoInput onAddItem={addTodo}/>
          <div className="list-block">
          <h2 className='title'>ToDo</h2>
          <hr />
          {
            todoItems.map(todo => <ToDoItem key={todo} title={todo} onDelete={deleteToDo} onComplete={completeTodo}/>)
          }
        </div>
      </div>
      <div className="list-block">
        <h2 className='title'>Completed</h2>
        <hr />
        { 
            completedItems.map(todo => <ToDoItem key={todo} title={todo} onDelete={deleteToDo} isCompleted/>)
          }
      </div>
    </div>
  )
}

export default App
