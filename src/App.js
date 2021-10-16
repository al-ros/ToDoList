import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Task from './components/Task'
import InputTarget from './components/InputTarget'

function App() {
  
  const [tasks, setTasks] = useState([])
  const [inputTargetValue, setInputTargetValue] = useState('')


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
  // const index = tasks.findIndex(x => x.id === id);
  //   tasks.push(tasks.splice(index, 1)[0]);
    const updatedTasks = tasks.map((currentTask) => {
      if (currentTask.id === id) {
        return {...currentTask, completed: !currentTask.completed}
    }
      return currentTask
    })
    setTasks(updatedTasks)
  }
  
  const editTask = (id, value) => {
    const updatedTasks = tasks.map((currentTask) => {
      if (currentTask.id === id) {
        return {...currentTask, task: value}
      }
      return currentTask
    })
    setTasks(updatedTasks)
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((currentTask) => currentTask.id !== id )
    setTasks(updatedTasks)
  }
  
  const sortedTasks = [...tasks].sort(({completed}) => completed ? 1 : -1)

  // const sortedTasks = [ 
  //   ...tasks.filter(({completed}) => !completed), 
  //   ...tasks.filter(({completed}) => completed)
  // ]

  return (
    <div className="App">

      <header className="App__header">
        <Header/>      
      </header>

      <main className="App__main">
        {sortedTasks.map(({task, id, completed}) => 
        <Task 
          key={id} 
          task={task} 
          id={id} 
          completed={completed} 
          onDone={taskDone}
          onDelete={deleteTask} 
          onEdit={editTask}
        />)}
      </main>

      <footer className="App__footer">
      <InputTarget onChange={setInputTargetValue} onSubmit={handleInputTargetSubmit} value={inputTargetValue} />
      </footer>
    </div>
  );
}

export default App;
