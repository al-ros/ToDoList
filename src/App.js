import { useState } from 'react'
import './App.css'
import TaskContext from './contexts/TaskContext'
import Header from './components/Header'
import TaskList from './components/TaskList'
import InputTarget from './components/InputTarget'

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (value) => {
      setTasks([...tasks, 
        {
          task: value,
          id: Date.now(),
          completed: false
      }])
  }

  const taskDone = (id) => {
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

  const removeAllDone = () => setTasks(tasks.filter(({completed}) => !completed));


  const allDone = () => { 
    const updatedComleted = tasks.map((currentTask) => {
      return {...currentTask, completed: true}
    });
    setTasks(updatedComleted)
  }
  
  const allUndone = () => { 
    const updatedComleted = tasks.map((currentTask) => {
      return {...currentTask, completed: false}
    });
    setTasks(updatedComleted)
  }

  console.log('render: App');

  return (
    <div className="App">
      <TaskContext.Provider value={{ tasks, addTask, taskDone, editTask, deleteTask, removeAllDone, allDone, allUndone }}>
        <header className="App__header"><Header/></header>
        <main className="App__main">
          <TaskList />
        </main>
        <footer className="App__footer">
        <InputTarget />
        </footer>
      </TaskContext.Provider>
    </div>
  );
}

export default App;
