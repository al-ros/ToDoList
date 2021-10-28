import { useState, useEffect } from 'react'
import './App.css'
import TaskContext from './contexts/TaskContext'
import Header from './components/Header'
import TaskList from './components/TaskList'
import InputTarget from './components/InputTarget'

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)

    if (loadedTodos) {
      setTasks(loadedTodos)
    }
  }, [])

  useEffect(() => {
    const temp = JSON.stringify(tasks)
    localStorage.setItem("todos", temp)
  }, [tasks])

  const addTask = (value) => {
      setTasks([...tasks, 
        {
          task: value,
          id: Date.now(),
          completed: false
      }])
  }

  // const taskDone = (id) => {
  //   const updatedTasks = tasks.map((currentTask) => {
  //     if (currentTask.id === id) {
  //       return {...currentTask, completed: !currentTask.completed}
  //   }
  //     return currentTask
  //   })
  //   setTasks(updatedTasks)
  // }
  
  const taskDone = (id) => setTasks(tasks.map((currentTask) => {
    if (currentTask.id === id) {
      return {...currentTask, completed: !currentTask.completed}
    }
    return currentTask
  }))

  // const editTask = (id, value) => {
  //   const updatedTasks = tasks.map((currentTask) => {
  //     if (currentTask.id === id) {
  //       return {...currentTask, task: value}
  //     }
  //     return currentTask
  //   })
  //   setTasks(updatedTasks)
  // }

  const editTask = (id, value) => setTasks(tasks.map((currentTask) => {
    if (currentTask.id === id) {
      return {...currentTask, task: value}
    }
    return currentTask
  }))

  // const deleteTask = (id) => {
  //   const updatedTasks = tasks.filter((currentTask) => currentTask.id !== id )
  //   setTasks(updatedTasks)
  // }

  const deleteTask = (id) => setTasks(tasks.filter((currentTask) => currentTask.id !== id))


  const removeAllDone = () => setTasks(tasks.filter(({completed}) => !completed));

  const allDone = () => setTasks(tasks.map((currentTask) => {
    return {...currentTask, completed: true}
  }));

  const allUndone = () => setTasks(tasks.map((currentTask) => {
    return {...currentTask, completed: false}
  }));


  console.log('render: App');

  return (
    <div className="App">
      <div className="App__container"> 
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
    </div>
  );
}

export default App;
