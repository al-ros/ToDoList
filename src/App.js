import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Task from './components/Task'
import InputTarget from './components/InputTarget'

function App() {
  const [inputTargetValue, setInputTargetValue] = useState('')
    const [tasks, setTasks] = useState([])

    const handleInputTargetSubmit = () => {
        setTasks([...tasks, {
            task: inputTargetValue,
            date: new Date()
        }])
        setInputTargetValue('')
    }
    const QWERTY = (inputTargetValue)
    console.log(QWERTY)
    
    return (
      <div className="App">

        <header className="App__header">
          <Header/>      
        </header>

        <main className="App__main">
          {tasks.map(({task, date}) => <Task key={date} task={task}/>)}
        </main>

        <footer className="App__footer">
        <InputTarget onChange={setInputTargetValue} onSubmit={handleInputTargetSubmit} value={inputTargetValue}/>
        </footer>
      </div>
    );
}

export default App;
