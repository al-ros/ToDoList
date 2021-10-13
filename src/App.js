import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Task from './components/Task'
import InputTarget from './components/InputTarget'

function App() {
  
  const [tasks, setTasks] = useState([])
  const [inputTargetValue, setInputTargetValue] = useState('')
  const [taskEditing, setTaskEditing] = useState(null)
  const [editingText, setEditingText] = useState('')

  const handleInputTargetSubmit = () => {
      setTasks([...tasks, 
        {
          task: inputTargetValue,
          id: Date.now(), // or new Date().getTime() V CHEM RAZNIZA?!
          completed: false
      }])
      setInputTargetValue('')
  }

  const taskDone = (id) => {
  const index = tasks.findIndex(x => x.id === id);
    tasks.push(tasks.splice(index, 1)[0]);
    const updatedTasks = [...tasks].map((currentTask) => {
      if (currentTask.id === id) {
        currentTask.completed = !currentTask.completed
    }
      return currentTask
    })
    setTasks(updatedTasks)
  }
  
  const editTask = (id) => {
    const updatedTasks = [...tasks].map((currentTask) => {
      if (currentTask.id === id) {
        currentTask.text = editingText
    }
      return currentTask
    })
    setTasks(updatedTasks)
    setTaskEditing(null)
    setEditingText('')
  }

  const deleteTask = (id) => {
    const updatedTasks = [...tasks].filter((currentTask) => currentTask.id !== id )
    setTasks(updatedTasks)
    // console.log(updatedTasks)
  }
  
  
  return (
    <div className="App">

      <header className="App__header">
        <Header/>      
      </header>

      <main className="App__main">
        {tasks.map(({task, id, completed}) => <Task key={id} task={task} id={id} completed={completed} taskDone={taskDone} editTask={editTask} deleteTask={deleteTask}/>)}
      </main>

      <h1>{console.log(tasks)}</h1>

      <footer className="App__footer">
      <InputTarget onChange={setInputTargetValue} onSubmit={handleInputTargetSubmit} value={inputTargetValue} />
      </footer>
    </div>
  );
}

export default App;
