import './App.scss'
import Header from './components/Header'
import Task from './components/Task'
import InputTarget from './components/InputTarget'

function App() {
  return (
    <div className="App">

      <header className="header">
        <Header/>      
      </header>

      <main className="main">
        <Task/>
      </main>

      <footer className="footer">
        <InputTarget/>
      </footer>
    </div>
  );
}

export default App;
