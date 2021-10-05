import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Task from './components/Task'
import InputTarget from './components/InputTarget'

function App() {
  
  const [tasks, setTasks] = useState([])
  const [inputTargetValue, setInputTargetValue] = useState('')

  const handleInputTargetSubmit = () => {
      setTasks([...tasks, {
          task: inputTargetValue,
          id: new Date().getTime()
      }])
      setInputTargetValue('')
  }

  const taskDone = () => {
    console.log(tasks)
  }
  
  const editTask = () => {
    console.log('EDIT')
  }

  const deleteTask = (id) => {
    const updatedTasks = [...tasks].filter((inputTargetValue) => inputTargetValue.id !== id )
    setTasks(updatedTasks)
    // console.log(id)
  }
  
  
  return (
    <div className="App">

      <header className="App__header">
        <Header/>      
      </header>

      <main className="App__main">
        {tasks.map(({task, id}) => <Task key={id} task={task} id={id} taskDone={taskDone} editTask={editTask} deleteTask={deleteTask}/>)}
      </main>

      <footer className="App__footer">
      <InputTarget onChange={setInputTargetValue} onSubmit={handleInputTargetSubmit} value={inputTargetValue} />
      </footer>
    </div>
  );
}

export default App;
